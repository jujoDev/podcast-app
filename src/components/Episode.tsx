import { FC } from 'react';
import { EpisodeDetails } from '../types/config';
interface Props {
    selectedEpisode: EpisodeDetails;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Episode: FC<Props> = ({ selectedEpisode, setIsLoading }) => {
    return <>
        {selectedEpisode.id ? (<div className='p-4 bg-white rounded-lg shadow-md sm:col-span-1 md:col-span-2 lg:col-span-3'>
            <h2 className='my-5 text-xl font-bold'>{selectedEpisode.title}</h2>
            {selectedEpisode.description ? <div aria-label='Episode description' className="italic" dangerouslySetInnerHTML={{ __html: selectedEpisode.description }} /> : null}
            <hr className='w-full my-4 border-t border-gray-300' />
            <audio aria-label="Audio player" className="w-full" onLoadedData={() => setIsLoading(false)} controls>
                {selectedEpisode.url ? <source src={selectedEpisode.url} type='audio/mpeg' /> : null}
                Your browser does not support the audio element.
            </audio>
        </div>) : null}
    </>
}
export default Episode;