import Header from "../../components/Header";
import { useContext, useState } from "react";
import { PodcastContext } from "../../context/podcastContext";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";

export const EpisodePage = () => {
    const { podcastDetailsCtx, podcastDescription, selectedEpisode } = useContext(PodcastContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return (
        <div className='w-100 m-10'>
            <Header isLoading={isLoading} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-20 gap-y-6'>
                {podcastDetailsCtx?.name ? <PodcastDetailsCard podcastDescription={podcastDescription} podcastDetails={podcastDetailsCtx} /> : null}
                {selectedEpisode?.title ?
                    <div className='sm:col-span-1 md:col-span-2 lg:col-span-3 p-4 bg-white rounded-lg shadow-md'>
                        <h2 className='font-bold text-xl my-5'>{selectedEpisode.title}</h2>
                        {selectedEpisode.description ? <div className="italic" dangerouslySetInnerHTML={{ __html: selectedEpisode.description }} /> : null}
                        <hr className='border-t border-gray-300 w-full my-4' />
                        <audio className="w-full" onLoadedData={() => setIsLoading(false)} controls>
                            {selectedEpisode.url ? <source src={selectedEpisode.url} type='audio/mpeg' /> : null}
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    : null}
            </div>
        </div>
    );
};

export default EpisodePage;