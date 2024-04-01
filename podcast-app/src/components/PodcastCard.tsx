import { FC } from 'react';
import { Podcast } from '../types/config';

interface Props {
    podcast: Podcast;
}

export const PodcastCard: FC<Props> = ({ podcast }) => {
    return (
        <div className='shadow-md w-fit	flex justify-center flex-col p-4'>
            <img className='rounded-full object-cover relative -translate-y-6 w-48	' src={podcast.image} alt={podcast.name} />
            <p>{podcast.name}</p>
            <p>Author: {podcast.author}</p>
        </div>
    )
}
export default PodcastCard;