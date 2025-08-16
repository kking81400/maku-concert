import React from 'react';
import { useBooking } from '../../contexts/BookingContext';

export default function Seat({ seat }) {
    const { selectedSeats, toggleSeat } = useBooking();
    const isSelected = selectedSeats.some(s => s.id === seat.id);

    let seatClass = 'w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center font-mono text-xs cursor-pointer transition-all duration-200';

    if (!seat.isAvailable) seatClass += ' bg-gray-300 text-gray-500 cursor-not-allowed';
    else if (isSelected) seatClass += ' bg-green-500 text-white transform scale-110';
    else seatClass += ' bg-indigo-100 text-indigo-600 hover:bg-indigo-200';

    return <div className={seatClass} onClick={() => seat.isAvailable && toggleSeat(seat)}>{seat.id}</div>;
};
