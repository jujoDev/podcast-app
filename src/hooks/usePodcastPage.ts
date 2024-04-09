import { useEffect, useState, useContext } from "react";
import { getPodcastDetails, getEpisodes } from "../services";
import { EpisodeDetails, PodcastDetails } from "../types/config";
import { PodcastContext } from "../context/podcastContext";
import { useNavigate } from "react-router-dom";
import { getDescription } from "../utils/methods/getDescription";
import { getStorage } from "../utils/methods/getStorage";

export const usePodcastPage = () => {
    const navigate = useNavigate();
    const { podcastDescription, setPodcastDetailsCtx, setSelectedEpisode } = useContext(PodcastContext);
    let { podcastId } = useContext(PodcastContext);

    if (!podcastId) {
        podcastId = window.location.pathname.replace('/', '') || "";
    }
    console.log(podcastDescription)

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [podcastDetails, setPodcastDetails] = useState<PodcastDetails>();
    const [episodes, setEpisodes] = useState<EpisodeDetails[]>([]);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [description, setDescription] = useState<string>(podcastDescription);
    const handleClick = (episode: EpisodeDetails) => {
        setSelectedEpisode(episode);
        const url = `/${window.location.pathname.replace('/', '')}/episode/${episode.id}`;
        navigate(url);
    }
    useEffect(() => {
        (async () => {
            if (firstLoad && podcastId) {
                setFirstLoad(false);
                setIsLoading(true);
                let details: PodcastDetails = getStorage(podcastId);
                if (!details) {
                    details = await getPodcastDetails(podcastId);
                    localStorage.setItem(`${podcastId}_data`, JSON.stringify(details));
                    localStorage.setItem(`${podcastId}_timestamp`, new Date().toISOString());
                }
                const descriptionResponse = await getDescription(podcastId);
                setPodcastDetails(details);
                setPodcastDetailsCtx(details);
                let episodes: EpisodeDetails[] = getStorage(details.url);
                if (!episodes) {
                    episodes = await getEpisodes(details.url);
                    localStorage.setItem(`${details.url}_data`, JSON.stringify(episodes));
                    localStorage.setItem(`${details.url}_timestamp`, new Date().toISOString());
                }
                setEpisodes(episodes);
                setIsLoading(false);
                if (!podcastDescription && descriptionResponse) {
                    setDescription(descriptionResponse);
                }
            }
        })();
    }, [firstLoad, podcastId, setPodcastDetailsCtx, podcastDescription]);
    return { isLoading, podcastDetails, episodes, podcastDescription: description, handleClick };
}
