// FILE: src/routes/index.jsx

import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';

// Pages
import HomePage from '../pages/HomePage';
import ConcertsPage from '../pages/ConcertsPage';
import ConcertDetailPage from '../pages/ConcertDetailPage';
import AboutPage from '../pages/AboutPage';
import ProfilePage from '../pages/ProfilePage';


export default function AppRouter() {
    const { page } = useNavigation();

    switch (page) {
        case 'home':
            return <HomePage />;
        case 'concerts':
            return <ConcertsPage />;
        case 'details':
            return <ConcertDetailPage />;
        case 'about':
            return <AboutPage />;
        case 'profile':
            return <ProfilePage />;
        default:
            return <HomePage />;
    }
};
