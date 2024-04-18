import { fireEvent, render, screen } from '@testing-library/react';
import Episode from './Episode';




describe('Episode', () => {

    const episodeMock = {
        "description": "test",
        "duration": "10:00",
        "id": "123213",
        "published": "string",
        "title": "Epidose Title",
        "url": "example.example"
    }

    const isLoadingMock = vi.fn();

    test('renders episode', () => {
        render(<Episode selectedEpisode={episodeMock} setIsLoading={isLoadingMock} />);
        expect(screen.getByText('Epidose Title')).toBeDefined();
    });

    test('when data is loaded', () => {
        render(<Episode selectedEpisode={episodeMock} setIsLoading={isLoadingMock} />);
        expect(screen.getByText('Epidose Title')).toBeDefined();
        const el = screen.getByLabelText('Audio player');
        fireEvent(el, new Event('loadeddata'));
        expect(isLoadingMock).toHaveBeenCalledOnce();

    });

    test('episode without url', () => {
        render(<Episode selectedEpisode={{ ...episodeMock, url: '' }} setIsLoading={isLoadingMock} />);
        screen.getByText('Your browser does not support the audio element.');
    });

    test('episode without description', () => {
        render(<Episode selectedEpisode={{ ...episodeMock, description: '' }} setIsLoading={isLoadingMock} />);
        expect(screen.queryByLabelText('Epidose description')).toBeNull();
    });

    test('episode without id', () => {
        render(<Episode selectedEpisode={{ ...episodeMock, id: '' }} setIsLoading={isLoadingMock} />);
        expect(screen.queryByText('Epidose Title')).toBeNull();
    });
});