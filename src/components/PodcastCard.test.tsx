import { fireEvent, render, screen } from '@testing-library/react';
import PodcastCard from './PodcastCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('PodcastCard', () => {
    const podcastMock = {
        "author": "test",
        "description": "test",
        "id": "123213",
        "image": "example.example",
        "name": "Podcast Title"
    }
    const handleClickMock = vi.fn();

    beforeEach(() => {
        render(<Router><PodcastCard podcast={podcastMock} handleClick={handleClickMock} /></Router>);
    });

    test('renders podcast card', () => {
        expect(screen.getByText(podcastMock.name)).toBeDefined();
        expect(screen.getByText(`Author: ${podcastMock.author}`)).toBeDefined();
        expect(screen.getByAltText(podcastMock.name)).toBeDefined();
    });

    test('when clicked', () => {
        const el = screen.getByAltText(podcastMock.name);
        fireEvent.click(el);
        expect(handleClickMock).toHaveBeenCalledOnce();
    });
})