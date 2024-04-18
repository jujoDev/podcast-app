import { fireEvent, render, screen } from '@testing-library/react';
import TableEpisodes from './TableEpisodes';

describe('TableEpisodes', () => {
    const episodesMock = [
        {
            "description": "description",
            "duration": "10:00:00",
            "id": "123213",
            "published": "01-01-2021",
            "title": "Episode Title",
            "url": "example.example"
        }, {
            "description": "description2",
            "duration": "10:00:01",
            "id": "123214",
            "published": "01-01-2022",
            "title": "Episode Title2",
            "url": "example.example"
        }
    ]
    const handleClickMock = vi.fn();

    beforeEach(() => {
        render(<TableEpisodes episodes={episodesMock} handleClick={handleClickMock} />);
    });

    test('renders table episodes', () => {
        expect(screen.getByText(episodesMock[0].title)).toBeDefined();
        expect(screen.getByText(episodesMock[0].published)).toBeDefined();
        expect(screen.getByText(episodesMock[0].duration)).toBeDefined();
    });

    test('when clicked', () => {
        const el = screen.getByText(episodesMock[0].title);
        fireEvent.click(el);
        expect(handleClickMock).toHaveBeenCalledOnce();
    });
});