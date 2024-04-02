import { ReactNode, useState } from 'react';
import { PodcastContext } from "./podcastContext";
import { PodcastDetails } from '../types/config';

interface Props {
    children: ReactNode;
}

const ContextProvider = ({ children }: Props) => {
    const [podcastDescription, setPodcastDescription] = useState<string>('');
    const [podcastId, setPodcastId] = useState<string>('');
    const [episodeUrl, setEpisodeUrl] = useState<string>('');
    const [podcastDetailsCtx, setPodcastDetailsCtx] = useState<PodcastDetails>({ id: '', name: '', author: '', description: '', url: '', image: '' });
    const value = {
        podcastDescription,
        setPodcastDescription,
        podcastId,
        setPodcastId,
        episodeUrl,
        setEpisodeUrl,
        podcastDetailsCtx,
        setPodcastDetailsCtx
    }
    return (
        <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
    );
}

export default ContextProvider;