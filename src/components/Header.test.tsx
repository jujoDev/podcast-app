import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Header', () => {

    const renderice = (isLoading: boolean) => {
        render(<Router><Header isLoading={isLoading} /></Router>);
    }

    test('renders header', () => {

        renderice(false)
        expect(screen.getByText('Podcaster')).toBeDefined();
    });

    test('when loading', () => {
        renderice(true);
        expect(screen.getByAltText('loading')).toBeDefined();
    });
}); 