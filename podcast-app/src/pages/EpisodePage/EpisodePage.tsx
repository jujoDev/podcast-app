import Header from "../../components/Header";
import { useContext } from "react";
import { PodcastContext } from "../../context/podcastContext";
import PodcastDetailsCard from "../../components/PodcastDetailsCard";

export const EpisodePage = () => {

    const { podcastDetailsCtx, podcastDescription } = useContext(PodcastContext);
    return (
        <div className='w-100'>
            <Header isLoading={false} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center align-top'>
                {podcastDetailsCtx?.name ? <PodcastDetailsCard podcastDescription={podcastDescription} podcastDetails={podcastDetailsCtx} /> : null}
            </div>
        </div>
    );
};

export default EpisodePage;