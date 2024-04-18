import { FC } from 'react';
import { PodcastDetails } from '../types/config';
import { useNavigate } from "react-router-dom";

interface Props {
    podcastDetails: PodcastDetails,
    podcastDescription: string,
    episodeView?: boolean;


}
export const PodcastDetailsCard: FC<Props> = ({ podcastDetails, podcastDescription, episodeView }) => {
    const navigate = useNavigate();
    const { name, author, image } = podcastDetails;
    return (
        <div className='flex flex-col items-center w-auto p-4 m-0 shadow-md'>
            <div className={episodeView ? 'cursor-pointer' : ''} onClick={() => episodeView && navigate(-1)}>
                <img className='relative object-cover w-48 m-4 rounded-md' src={image} alt={name} />
                <hr className='w-full my-4 border-t border-gray-300' />
                <div className='w-full text-start'>
                    <p className='font-bold'>{name}</p>
                    <p className='italic'>by {author}</p>
                </div>
            </div>
            <hr className='w-full my-4 border-t border-gray-300' />
            <div className='w-full text-start'>
                <p className='font-semibold'>Description: </p>
                <p className='italic'>{podcastDescription}</p>
            </div>
        </div>
    )
}
export default PodcastDetailsCard;