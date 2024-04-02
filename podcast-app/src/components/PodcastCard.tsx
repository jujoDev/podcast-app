import { FC } from 'react';
import { Podcast } from '../types/config';
import { Link } from "react-router-dom";

interface Props {
    podcast: Podcast;
    handleClick: (description: string, id: string) => void;
}

export const PodcastCard: FC<Props> = ({ podcast, handleClick }) => {

    return (
        <Link to={`/${podcast.id}`} onClick={() => handleClick(podcast.description, podcast.id)}>
            <div className='shadow-md w-fit	flex justify-center flex-col p-4'>
                <img className='rounded-full object-cover relative -translate-y-6 w-48	' src={podcast.image} alt={podcast.name} />
                <p>{podcast.name}</p>
                <p>Author: {podcast.author}</p>
            </div></Link>
    )
}
export default PodcastCard;