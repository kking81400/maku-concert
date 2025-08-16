import React from 'react';
import { useNavigation } from '../../contexts/NavigationContext';
import Button from '../common/Button';

export default function ConcertCard({ concert }) {
    const { navigate } = useNavigation();
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 fade-in">
            <img src={concert.image} alt={`پوستر کنسرت ${concert.artist}`} className="w-full h-48 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{concert.artist}</h3>
                <p className="text-gray-600 mt-1">{concert.title}</p>
                <div className="mt-4 text-sm text-gray-500 space-y-2">
                    <div className="flex items-center"><i className="fa-solid fa-calendar-days w-5 text-indigo-500"></i><span>{concert.date}</span></div>
                    <div className="flex items-center"><i className="fa-solid fa-location-dot w-5 text-indigo-500"></i><span>{concert.venue}</span></div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <span className="text-lg font-bold text-indigo-600">{concert.price.toLocaleString('fa-IR')} تومان</span>
                    <Button onClick={() => navigate('details', { id: concert.id })}>خرید بلیت</Button>
                </div>
            </div>
        </div>
    );
};
