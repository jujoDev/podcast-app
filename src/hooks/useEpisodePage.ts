import { useContext, useEffect, useState } from "react";
import { PodcastContext } from "../context/podcastContext";
import { getEpisodes, getPodcastDetails } from "../services";
import { EpisodeDetails, PodcastDetails } from '../types/config';
import { getDescription } from "../utils/methods/getDescription";



const useEpisodePage = () => {
    const { podcastDescription, podcastDetailsCtx, selectedEpisode } = useContext(PodcastContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [PodcastDetailsState, setPodcastDetailsState] = useState<PodcastDetails>(podcastDetailsCtx);
    const [selectedEpisodeState, setSelectedEpisodeState] = useState<EpisodeDetails>(selectedEpisode);
    const [description, setDescription] = useState<string>(podcastDescription);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    useEffect(() => {
        if (podcastDetailsCtx.url && selectedEpisode.id) return;
        if (!firstLoad) return;
        (async () => {

            const urlParts = window.location.pathname.split('/')
            const details: PodcastDetails = await getPodcastDetails(urlParts[1]);
            setPodcastDetailsState(details);
            const episodes: EpisodeDetails[] = await getEpisodes(details.url);
            const matchingEpisode = episodes.find(episode => episode.id === urlParts[3]);
            setSelectedEpisodeState(matchingEpisode || selectedEpisode);
            const descriptionResponse = await getDescription(urlParts[1]);
            if (!podcastDescription && descriptionResponse) {
                setDescription(descriptionResponse);
            }

        })();
        setFirstLoad(false)
    }), [podcastDetailsCtx, selectedEpisode, firstLoad];

    if (podcastDescription && podcastDetailsCtx && selectedEpisode) {
        return { isLoading, podcastDetailsCtx, selectedEpisode, setIsLoading, podcastDescription };
    } else {
        return { isLoading, podcastDetailsCtx: PodcastDetailsState, selectedEpisode: selectedEpisodeState, setIsLoading, podcastDescription: description };
    }
}

export { useEpisodePage }