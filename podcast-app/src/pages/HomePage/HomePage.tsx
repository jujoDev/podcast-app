import { useHomePage } from '../../hooks/useHomePage';
import Header from '../../components/Header';
import PodcastCard from '../../components/PodcastCard';
import { Podcast } from '../../types/config';

export const HomePage = () => {
    const { isLoading, filteredPodcasts, handleClick, filterPodcasts } = useHomePage();
    return (
        <div className='w-100 m-10'>
            <Header isLoading={isLoading} />
            <div className='mb-28 w-full flex justify-end items-center'>
                <span className='mr-4 bg-blue-600 p-2 text-gray-100 font-medium rounded-lg'>{filteredPodcasts.length}</span>
                <input onChange={(e) => filterPodcasts(e)} type='text' placeholder='Search for podcasts' className='w-1/2 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500' />
            </div>
            <div className='md:m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center gap-y-28'>
                {filteredPodcasts.length > 0 && filteredPodcasts.map((podcast: Podcast) => <PodcastCard key={podcast.id} podcast={podcast} handleClick={handleClick} />)}
            </div>
        </div>

    );
};

export default HomePage;