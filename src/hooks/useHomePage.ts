import { useEffect, useState, useContext } from "react";
import { getAllPodcasts } from "../services";
import { Podcast } from "../types/config";
import { PodcastContext } from "../context/podcastContext";

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
                const storedPodcastsData = localStorage.getItem('podcasts_data');
                const storedTimestamp = localStorage.getItem('podcasts_timestamp');
                let podcasts;
                if (storedPodcastsData && storedTimestamp) {
                    const storedTime = new Date(storedTimestamp).getTime();
                    const currentTime = new Date().getTime();
                    const twentyFourHours = 24 * 60 * 60 * 1000;
                    if (currentTime - storedTime > twentyFourHours) {
                        localStorage.removeItem('podcasts_data');
                        localStorage.removeItem('podcasts_timestamp');
                        podcasts = await getAllPodcasts();
                        localStorage.setItem('podcasts_data', JSON.stringify(podcasts));
                        localStorage.setItem('podcasts_timestamp', new Date().toISOString());
                    } else {
                        podcasts = JSON.parse(storedPodcastsData);
                    }
                } else {
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