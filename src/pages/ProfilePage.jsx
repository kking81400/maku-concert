import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function ProfilePage() {
    const { user } = useAuth();
    if (!user) return <div className="text-center py-20">لطفا ابتدا وارد شوید.</div>;

    // Mock purchase history
    const purchaseHistory = [
        { id: 1, concert: 'همایون شجریان', seats: 2, date: '۱۴۰۴/۰۵/۰۱' },
        { id: 2, concert: 'رضا بهرام', seats: 4, date: '۱۴۰۴/۰۲/۱۸' },
    ];

    return (
        <div className="container mx-auto px-6 fade-in">
            <div className="bg-white rounded-xl shadow-lg p-8 my-10">
                <h1 className="text-4xl font-bold mb-2">پروفایل کاربری</h1>
                <p className="text-gray-600 mb-8">خوش آمدید، {user.name}!</p>

                <h2 className="text-2xl font-bold border-b pb-3 mb-6">سوابق خرید</h2>
                <div className="space-y-4">
                    {purchaseHistory.map(item => (
                        <div key={item.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <p className="font-bold text-lg text-gray-800">{item.concert}</p>
                                <p className="text-sm text-gray-500">تعداد صندلی: {item.seats}</p>
                            </div>
                            <p className="text-sm text-gray-600 font-medium">تاریخ خرید: {item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
