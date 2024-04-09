import Header from "../../components/Header";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";
import Episode from '../../components/Episode';
import { useEpisodePage } from "../../hooks/useEpisodePage";

export const EpisodePage = () => {
    const { isLoading, podcastDetailsCtx, selectedEpisode, setIsLoading, podcastDescription } = useEpisodePage();

    return (
        <div className='w-100 m-10'>
            <Header isLoading={isLoading} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-20 gap-y-6'>
                {podcastDetailsCtx.name ? <PodcastDetailsCard episodeView={true} podcastDescription={podcastDescription} podcastDetails={podcastDetailsCtx} /> : null}
                {selectedEpisode.title && <Episode selectedEpisode={selectedEpisode.title ? selectedEpisode : selectedEpisode} setIsLoading={setIsLoading} />}
            </div>
        </div>
    );
};

export default EpisodePage;