import { FC } from 'react';
import { EpisodeDetails } from '../types/config';
interface Props {
    selectedEpisode: EpisodeDetails;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Episode: FC<Props> = ({ selectedEpisode, setIsLoading }) => {
    return (<div className='sm:col-span-1 md:col-span-2 lg:col-span-3 p-4 bg-white rounded-lg shadow-md'>
        <h2 className='font-bold text-xl my-5'>{selectedEpisode.title}</h2>
        {selectedEpisode.description ? <div className="italic" dangerouslySetInnerHTML={{ __html: selectedEpisode.description }} /> : null}
        <hr className='border-t border-gray-300 w-full my-4' />
        <audio className="w-full" onLoadedData={() => setIsLoading(false)} controls>
            {selectedEpisode.url ? <source src={selectedEpisode.url} type='audio/mpeg' /> : null}
            Your browser does not support the audio element.
        </audio>
    </div>)
}
export default Episode;