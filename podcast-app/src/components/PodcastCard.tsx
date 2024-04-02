import { FC } from 'react';
import { Podcast } from '../types/config';
import { Link } from "react-router-dom";

interface Props {
    podcast: Podcast;
    handleClick: (description: string, id: string) => void;
}

export const PodcastCard: FC<Props> = ({ podcast, handleClick }) => {

    return (
        <Link className='w-full' to={`/${podcast.id}`} onClick={() => handleClick(podcast.description, podcast.id)}>
            <div className='shadow-md flex justify-center items-center flex-col p-4 text-center max-h-52	'>
                <img className='rounded-full object-cover w-48 relative -translate-y-10	' src={podcast.image} alt={podcast.name} />
                <div className='relative -translate-y-5 pb-6'>
                    <p className='font-bold'>{podcast.name}</p>
                    <p className='font-extralight'>Author: {podcast.author}</p>
                </div>

            </div></Link>
    )
}
export default PodcastCard;