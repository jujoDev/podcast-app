import { FC, useContext } from 'react';
import { EpisodeDetails } from '../types/config';
import { Link } from 'react-router-dom';
import { PodcastContext } from "../context/podcastContext";


interface Props {
    episodes: EpisodeDetails[];
}

const TableEpisodes: FC<Props> = ({ episodes }) => {
    const { podcastId } = useContext(PodcastContext);
    return (
        <div className='col-span-2 flex flex-col w-full'>
            <div className='flex justify-start mb-5 shadow-md align-top flex-col p-4'>
                <h2 className='font-bold text-xl'>
                    Episodes: {episodes.length}
                </h2>
            </div>
            <div className='max-h-96 overflow-auto shadow-md p-10'>
                <table className='w-full '>
                    <thead>
                        <tr>
                            <th className='text-left'>Title</th>
                            <th className='text-left'>Date</th>
                            <th className='text-left'>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes.map((episode: EpisodeDetails, index: number) => {
                            return (
                                <tr className={index % 2 === 0 ? 'even-row' : 'odd-row'} key={episode.id}>
                                    <Link to={`/${podcastId}/episode/${episode.id}`}><td className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>{episode.title}</td></Link>
                                    <td>{episode.published}</td>
                                    <td>{episode.duration}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableEpisodes;