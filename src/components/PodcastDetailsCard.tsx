import { FC } from 'react';
import { PodcastDetails } from '../types/config';
interface Props {
    podcastDetails: PodcastDetails,
    podcastDescription: string

}
export const PodcastDetailsCard: FC<Props> = ({ podcastDetails, podcastDescription }) => {
    const { name, author, image } = podcastDetails;
    return (
        <div className='shadow-md w-auto	 flex items-center flex-col p-4 m-0'>
            <img className='object-cover relative w-48 m-4 rounded-md' src={image} alt={name} />
            <hr className='border-t border-gray-300 w-full my-4' />
            <div className='text-start w-full'>
                <p className='font-bold'>{name}</p>
                <p className='italic'>by {author}</p>
            </div>
            <hr className='border-t border-gray-300 w-full my-4' />
            <div className='text-start w-full'>
                <p className='font-semibold'>Description: </p>
                <p className='italic'>{podcastDescription}</p>
            </div>
        </div>
    )
}
export default PodcastDetailsCard;