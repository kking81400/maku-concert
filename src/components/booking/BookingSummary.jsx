import React from 'react';
import { useBooking } from '../../contexts/BookingContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '../../contexts/NavigationContext';
import Button from '../common/Button';

export default function BookingSummary({ concert }) {
    const { selectedSeats, clearSelection } = useBooking();
    const { isLoggedIn, setShowLogin, user } = useAuth();
    const { navigate } = useNavigation();
    const totalPrice = selectedSeats.length * concert.price;

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            alert("لطفا ابتدا یک یا چند صندلی انتخاب کنید.");
            return;
        }
        if (!isLoggedIn) {
            setShowLogin(true);
            return;
        }
        alert(`کاربر گرامی ${user.name}، رزرو شما برای ${selectedSeats.length} صندلی با موفقیت ثبت شد.\nمبلغ قابل پرداخت: ${totalPrice.toLocaleString('fa-IR')} تومان`);
        clearSelection();
        navigate('profile');
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6 fade-in w-full sm:w-80">
            <h3 className="text-2xl font-bold border-b pb-3 mb-4 text-gray-800">خلاصه رزرو</h3>
            {selectedSeats.length > 0 ? (
                <>
                    <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-2">
                        <p className="font-semibold text-gray-700">صندلی‌های انتخاب شده:</p>
                        <div className="flex flex-wrap gap-2">
                            {selectedSeats.map(seat => (
                                <span key={seat.id} className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">{seat.id}</span>
                            ))}
                        </div>
                    </div>
                    <div className="border-t pt-4 space-y-3">
                        <div className="flex justify-between items-center text-lg"><span className="text-gray-600">تعداد صندلی:</span><span className="font-bold text-gray-800">{selectedSeats.length.toLocaleString('fa-IR')}</span></div>
                        <div className="flex justify-between items-center text-xl"><span className="text-gray-600">مبلغ کل:</span><span className="font-bold text-indigo-600">{totalPrice.toLocaleString('fa-IR')} تومان</span></div>
                    </div>
                    <div className="mt-6 space-y-3">
                        <Button onClick={handleBooking} className="w-full"><i className="fa-solid fa-check ml-2"></i>{isLoggedIn ? 'تایید و پرداخت' : 'ورود و ادامه خرید'}</Button>
                        <Button onClick={clearSelection} variant="secondary" className="w-full">لغو انتخاب</Button>
                    </div>
                </>
            ) : (
                <div className="text-center text-gray-500 py-8">
                    <i className="fa-solid fa-chair text-4xl mb-3"></i>
                    <p>لطفاً صندلی مورد نظر خود را از روی نقشه انتخاب کنید.</p>
                </div>
            )}
        </div>
    );
};
