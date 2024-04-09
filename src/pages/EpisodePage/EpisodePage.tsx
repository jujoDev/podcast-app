import Header from "../../components/Header";
import { useContext, useState } from "react";
import { PodcastContext } from "../../context/podcastContext";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";
import Episode from "../../components/Episode";

export const EpisodePage = () => {
    const { podcastDetailsCtx, podcastDescription, selectedEpisode } = useContext(PodcastContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <div className='w-100 m-10'>
            <Header isLoading={isLoading} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-20 gap-y-6'>
                {podcastDetailsCtx?.name ? <PodcastDetailsCard podcastDescription={podcastDescription} podcastDetails={podcastDetailsCtx} /> : null}
                {selectedEpisode?.title && <Episode selectedEpisode={selectedEpisode} setIsLoading={setIsLoading} />}
            </div>
        </div>
    );
};

export default EpisodePage;