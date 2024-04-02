import { useEffect, useState, useContext } from "react";
import { getAllPodcasts } from "../services";
import { Podcast } from "../types/config";
import { PodcastContext } from "../context/podcastContext";

export const useHomePage = () => {
    const contextValue = useContext(PodcastContext)!;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [podcasts, setPodcasts] = useState<Podcast[] | []>([]);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const handleClick = (description: string, id: string) => {
        const { setPodcastDescription, setPodcastId } = contextValue;
        setPodcastDescription(description);
        setPodcastId(id);
    }
    useEffect(() => {
        (async () => {
            if (firstLoad) {
                setFirstLoad(false);
                setIsLoading(true);
                const podcasts = await getAllPodcasts();
                setPodcasts(podcasts)
                setIsLoading(false);
            }
        })();
    }, [firstLoad]);
    return { isLoading, podcasts, handleClick }
}