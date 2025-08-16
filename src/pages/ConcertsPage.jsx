import React, { useState } from 'react';
import { mockConcerts } from '../api/mockData';
import ConcertCard from '../components/concerts/ConcertCard';

export default function ConcertsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [venueFilter, setVenueFilter] = useState('all');

    const venues = ['all', ...new Set(mockConcerts.map(c => c.venue))];

    const filteredConcerts = mockConcerts
        .filter(concert => concert.artist.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(concert => venueFilter === 'all' || concert.venue === venueFilter);

    return (
        <div className="container mx-auto px-6 fade-in">
            <h1 className="text-4xl font-bold text-center my-10">جستجوی کنسرت‌ها</h1>

            <div className="bg-white p-4 rounded-xl shadow-md mb-10 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-grow w-full md:w-auto">
                    <input type="text" placeholder="نام خواننده را جستجو کنید..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-3 pr-10 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-0 transition"/>
                    <i className="fa-solid fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                    <select value={venueFilter} onChange={(e) => setVenueFilter(e.target.value)} className="w-full p-3 rounded-lg border-2 border-gray-200 bg-white focus:border-indigo-500 focus:ring-0 transition">
                        {venues.map(v => <option key={v} value={v}>{v === 'all' ? 'همه سالن‌ها' : v}</option>)}
                    </select>
                </div>
            </div>

            {filteredConcerts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredConcerts.map(c => <ConcertCard key={c.id} concert={c} />)}
                </div>
            ) : (
                <div className="text-center py-20 text-gray-500">
                    <i className="fa-solid fa-circle-exclamation text-5xl mb-4"></i>
                    <p className="text-xl">کنسرتی با این مشخصات یافت نشد.</p>
                </div>
            )}
        </div>
    );
};
