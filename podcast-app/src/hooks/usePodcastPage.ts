import { useEffect, useState, useContext } from "react";
import { getPodcastDetails, getEpisodes } from "../services";
import { EpisodeDetails, PodcastDetails } from "../types/config";
import { PodcastContext } from "../context/podcastContext";



export const usePodcastPage = () => {
    const { podcastDescription, podcastId, setPodcastDetailsCtx, setSelectedEpisode } = useContext(PodcastContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [podcastDetails, setPodcastDetails] = useState<PodcastDetails>();
    const [episodes, setEpisodes] = useState<EpisodeDetails[]>([]);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const handleClick = (episode: EpisodeDetails) => {
        setSelectedEpisode(episode);
    }
    useEffect(() => {
        (async () => {
            if (firstLoad && podcastId) {
                setFirstLoad(false);
                setIsLoading(true);
                const details: PodcastDetails = await getPodcastDetails(podcastId);
                setPodcastDetails(details);
                setPodcastDetailsCtx(details);
                const episodes: EpisodeDetails[] = await getEpisodes(details.url);
                setEpisodes(episodes);
                setIsLoading(false);
            }
        })();
    }, [firstLoad, podcastId, setPodcastDetailsCtx]);
    return { isLoading, podcastDetails, episodes, podcastDescription, handleClick };
}
