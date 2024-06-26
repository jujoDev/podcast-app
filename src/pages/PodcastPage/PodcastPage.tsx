import Header from '../../components/Header';
import { usePodcastPage } from '../../hooks/usePodcastPage';
import PodcastDetailsCard from '../../components/PodcastDetailsCard';
import TableEpisodes from '../../components/TableEpisodes';
import './css/index.css';



export const PodcastPage = () => {
    const { isLoading, podcastDetails, episodes, podcastDescription, handleClick } = usePodcastPage();
    return (
        <div className='w-100 m-10'>
            <Header isLoading={isLoading} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-20 gap-y-6'>
                {podcastDetails?.name ? <PodcastDetailsCard podcastDescription={podcastDescription} podcastDetails={podcastDetails} /> : null}
                {episodes.length > 0 ? <TableEpisodes handleClick={handleClick} episodes={episodes} /> : null}
            </div>
        </div>

    );
};

export default PodcastPage;