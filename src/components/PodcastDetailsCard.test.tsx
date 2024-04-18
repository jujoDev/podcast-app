import { fireEvent, render, screen } from '@testing-library/react';
import PodcastDetailsCard from './PodcastDetailsCard';
import { BrowserRouter as Router } from 'react-router-dom';


describe('PodcastDetailsCard', () => {
    const podcastDetailsMock = {
        "author": "test",
        "description": "test",
        "id": "123213",
        "image": "example.example",
        "name": "Podcast Title",
        "url": "example.example"
    }
    const podcastDescriptionMock = 'test';

    const renderice = (episodeView: boolean) => {
        render(<Router>
            <PodcastDetailsCard podcastDetails={podcastDetailsMock} podcastDescription={podcastDescriptionMock} episodeView={episodeView} />
        </Router>);
    };

    test('renders podcast details card', () => {
        renderice(false);
        expect(screen.getByText(podcastDetailsMock.name)).toBeDefined();
        expect(screen.getByText(`by ${podcastDetailsMock.author}`)).toBeDefined();
        expect(screen.getByAltText(podcastDetailsMock.name)).toBeDefined();
        expect(screen.getByText('Description:')).toBeDefined();
        expect(screen.getByText(podcastDescriptionMock)).toBeDefined();
    });

    test('when clicked', () => {
        renderice(true);
        const el = screen.getByAltText(podcastDetailsMock.name);
        fireEvent.click(el);
        expect(screen.getByText('Description:')).toBeDefined();
        expect(screen.getByText(podcastDescriptionMock)).toBeDefined();
    });
});