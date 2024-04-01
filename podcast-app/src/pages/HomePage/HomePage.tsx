import React from 'react';
import { HomePageLogic } from './methods/HomePageLogic';
import Header from '../../components/Header';
import PodcastCard from '../../components/PodcastCard';
import { Podcast } from '../../types/config';

export const HomePage = () => {
    const { isLoading, podcasts } = HomePageLogic();
    return (
        <div className='w-100'>
            <Header isLoading={isLoading} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
                {podcasts.length > 0 && podcasts.map((podcast: Podcast) => <PodcastCard key={podcast.id} podcast={podcast} />)}
            </div>
        </div>

    );
};

export default HomePage;