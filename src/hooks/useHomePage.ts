import { useEffect, useState, useContext } from "react";
import { getAllPodcasts } from "../services";
import { Podcast } from "../types/config";
import { PodcastContext } from "../context/podcastContext";
import { getStorage } from "../utils/methods/getStorage";

export const useHomePage = () => {
    const contextValue = useContext(PodcastContext)!;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [podcasts, setPodcasts] = useState<Podcast[] | []>([]);
    const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[] | []>([]);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const handleClick = (description: string, id: string) => {
        const { setPodcastDescription, setPodcastId } = contextValue;
        setPodcastDescription(description);
        setPodcastId(id);
    }
    const filterPodcasts = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const filterResults = podcasts.filter((podcast: Podcast) => podcast.name.toLowerCase().includes(input.toLowerCase()) || podcast.author.toLowerCase().includes(input.toLowerCase()));
        if (input) {
            filterResults.length ? setFilteredPodcasts(filterResults) : setFilteredPodcasts([]);
        } else {
            setFilteredPodcasts(podcasts);
        }

    }
    useEffect(() => {
        (async () => {
            if (firstLoad) {
                setFirstLoad(false);
                setIsLoading(true);
                let podcasts = getStorage('podcasts');
                if (!podcasts) {
                    podcasts = await getAllPodcasts();
                    localStorage.setItem('podcasts_data', JSON.stringify(podcasts));
                    localStorage.setItem('podcasts_timestamp', new Date().toISOString());
                }
                setFilteredPodcasts(podcasts)
                setPodcasts(podcasts);
                setIsLoading(false);
            }
        })();
    }, [firstLoad]);
    return { isLoading, podcasts, handleClick, filterPodcasts, filteredPodcasts }
}