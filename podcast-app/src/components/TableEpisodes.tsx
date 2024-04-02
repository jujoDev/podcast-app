import { FC, useContext } from 'react';
import { EpisodeDetails } from '../types/config';
import { PodcastContext } from "../context/podcastContext";


interface Props {
    episodes: EpisodeDetails[];
    handleClick: (episode: EpisodeDetails, podcastId: string) => void;
}

const TableEpisodes: FC<Props> = ({ episodes, handleClick }) => {
    const { podcastId } = useContext(PodcastContext);
    return (
        <div className='sm:col-span-1 md:col-span-2 lg:col-span-3 flex flex-col w-full'>
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
                        <tr>
                            <td colSpan={3}>
                                <hr className='border-gray-300 my-2' />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes.map((episode: EpisodeDetails, index: number) => {
                            return (
                                <>
                                    <tr className={index % 2 === 0 ? 'even-row' : 'odd-row'} key={`${episode.id}_${podcastId}`}>
                                        <td onClick={() => handleClick(episode, podcastId)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>{episode.title}
                                        </td>
                                        <td>{episode.published}</td>
                                        <td>{episode.duration}</td>

                                    </tr>
                                    <tr key={`${episode.id}_bar}`}>
                                        <td colSpan={3}>
                                            <hr className='border-gray-300 shadow-md' />
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableEpisodes;