import { FC } from 'react';
import { PodcastDetails } from '../types/config';
interface Props {
    podcastDetails: PodcastDetails,
    podcastDescription: string

}
export const PodcastDetailsCard: FC<Props> = ({ podcastDetails, podcastDescription }) => {
    const { name, author, image } = podcastDetails;
    return (
        <div className='shadow-md w-fit	flex justify-center align-top flex-col p-4'>
            <img className='object-cover relative w-48' src={image} alt={name} />
            <p>{name}</p>
            <p>Author: {author}</p>
            <p>Description: </p>
            <p>{podcastDescription}</p>
        </div>
    )
}
export default PodcastDetailsCard;