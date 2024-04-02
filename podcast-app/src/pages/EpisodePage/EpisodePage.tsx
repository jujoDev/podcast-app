import Header from "../../components/Header";
import { useContext, useState } from "react";
import { PodcastContext } from "../../context/podcastContext";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";

export const EpisodePage = () => {
    const { podcastDetailsCtx, podcastDescription, selectedEpisode } = useContext(PodcastContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <div className='w-100'>
            <Header isLoading={isLoading} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center align-top'>
                {podcastDetailsCtx?.name ? <PodcastDetailsCard podcastDescription={podcastDescription} podcastDetails={podcastDetailsCtx} /> : null}
                {selectedEpisode?.title ?
                    <div className='col-span-2 p-4 bg-white rounded-lg shadow-md'>
                        <h2 className='font-bold text-xl'>{selectedEpisode.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: selectedEpisode.description }} />
                        <audio onLoadedData={() => setIsLoading(false)} controls>
                            <source src={selectedEpisode.url} type='audio/mpeg' />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default EpisodePage;