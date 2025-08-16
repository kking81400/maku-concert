import React, { useState, useEffect } from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { BookingProvider } from '../contexts/BookingContext';
import { mockConcerts, generateSeatMap } from '../api/mockData';
import SeatMap from '../components/booking/SeatMap';
import BookingSummary from '../components/booking/BookingSummary';

export default function ConcertDetailPage() {
    const { params } = useNavigation();
    const [concert, setConcert] = useState(null);

    useEffect(() => {
        const concertData = mockConcerts.find(c => c.id === params.id);
        if (concertData) {
            const details = { ...concertData, seatMap: generateSeatMap() };
            setConcert(details);
        }
    }, [params.id]);

    if (!concert) return <div className="text-center py-20">در حال بارگذاری...</div>;

    return (
        <BookingProvider>
            <div className="container mx-auto px-6 fade-in">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden my-10 p-6 md:flex items-center gap-8">
                    <img src={concert.image} alt={concert.artist} className="w-full md:w-1/3 h-64 object-cover rounded-lg"/>
                    <div className="mt-5 md:mt-0">
                        <h1 className="text-4xl font-extrabold text-gray-800">{concert.artist}</h1>
                        <p className="text-xl text-gray-600 mt-2">{concert.title}</p>
                        <div className="mt-6 text-gray-700 space-y-3">
                            <p><i className="fa-solid fa-calendar-days w-6 text-indigo-500"></i> {concert.date}</p>
                            <p><i className="fa-solid fa-location-dot w-6 text-indigo-500"></i> {concert.venue}</p>
                            <p><i className="fa-solid fa-money-bill-wave w-6 text-indigo-500"></i> شروع قیمت از {concert.price.toLocaleString('fa-IR')} تومان</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">انتخاب صندلی</h2>
                        <SeatMap concert={concert} />
                    </div>
                    <div>
                        <BookingSummary concert={concert} />
                    </div>
                </div>
            </div>
        </BookingProvider>
    );
};
