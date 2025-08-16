import React from 'react';
import { mockConcerts } from '../api/mockData';
import { useNavigation } from '../contexts/NavigationContext';
import Button from '../components/common/Button';
import ConcertCard from '../components/concerts/ConcertCard';

export default function HomePage() {
    const featuredConcerts = mockConcerts.slice(0, 3);
    const { navigate } = useNavigation();

    return (
        <div className="container mx-auto px-6 fade-in">
            <section className="text-center py-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">بهترین تجربه‌های موسیقی در ماکو</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">به راحتی بلیت کنسرت خوانندگان محبوب خود را رزرو کنید و صندلی خود را آنلاین انتخاب کنید.</p>
                <Button onClick={() => navigate('concerts')} className="mt-8 text-lg"><i className="fa-solid fa-search ml-2"></i>مشاهده همه کنسرت‌ها</Button>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-center mb-10">کنسرت‌های پیش رو</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredConcerts.map(c => <ConcertCard key={c.id} concert={c} />)}
                </div>
            </section>
        </div>
    );
};
