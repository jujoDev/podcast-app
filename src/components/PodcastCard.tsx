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
            <div className='flex flex-col items-center justify-center p-4 text-center shadow-md max-h-52 '>
                <img className='relative object-cover w-48 -translate-y-10 rounded-full ' src={podcast.image} alt={podcast.name} />
                <div className='relative w-full pb-6 -translate-y-5'>
                    <p className='font-bold truncate'>{podcast.name}</p>
                    <p className='truncate font-extralight'>Author: {podcast.author}</p>
                </div>

            </div>´
        </Link>
    )
}
export default PodcastCard;