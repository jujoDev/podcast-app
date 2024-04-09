import { createContext } from "react";
import { PodcastDetails, EpisodeDetails } from "../types/config";
interface PodcastContextType {
    podcastDescription: string;
    setPodcastDescription: (description: string) => void;
    podcastId: string;
    setPodcastId: (id: string) => void;
    episodeUrl: string;
    setEpisodeUrl: (url: string) => void;
    podcastDetailsCtx: PodcastDetails;
    setPodcastDetailsCtx: (details: PodcastDetails) => void;
    selectedEpisode: EpisodeDetails;
    setSelectedEpisode: (episode: EpisodeDetails) => void;
}

const initial_state: PodcastContextType = {
    podcastDescription: '',
    setPodcastDescription: (description: string) => { console.log(description) },
    podcastId: '',
    setPodcastId: (id: string) => { console.log(id) },
    episodeUrl: '',
    setEpisodeUrl: (url: string) => { console.log(url) },
    podcastDetailsCtx: {
        id: '',
        name: '',
        author: '',
        description: '',
        url: '',
        image: ''
    },
    setPodcastDetailsCtx: (details: PodcastDetails) => { console.log(details) },
    selectedEpisode: {
        description: '',
        duration: '',
        id: '',
        published: '',
        title: '',
        url: '',
    },
    setSelectedEpisode: (episode: EpisodeDetails) => { console.log(episode) }
}
export const PodcastContext = createContext<PodcastContextType>(initial_state);



