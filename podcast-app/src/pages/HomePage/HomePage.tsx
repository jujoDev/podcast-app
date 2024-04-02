import { useHomePage } from '../../hooks/useHomePage';
import Header from '../../components/Header';
import PodcastCard from '../../components/PodcastCard';
import { Podcast } from '../../types/config';

export const HomePage = () => {
    const { isLoading, filteredPodcasts, handleClick, filterPodcasts } = useHomePage();
    return (
        <div className='w-100'>
            <Header isLoading={isLoading} />
            <div>
                <span>{filteredPodcasts.length}</span>
                <input onChange={(e) => filterPodcasts(e)} type='text' placeholder='Search for podcasts' className='w-1/2 p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
                {filteredPodcasts.length > 0 && filteredPodcasts.map((podcast: Podcast) => <PodcastCard key={podcast.id} podcast={podcast} handleClick={handleClick} />)}
            </div>
        </div>

    );
};

export default HomePage;