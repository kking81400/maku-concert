import React, { useState, createContext, useContext } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (seat) => {
        setSelectedSeats(prev =>
            prev.find(s => s.id === seat.id)
                ? prev.filter(s => s.id !== seat.id)
                : [...prev, seat]
        );
    };

    const clearSelection = () => {
        setSelectedSeats([]);
    };

    return (
        <BookingContext.Provider value={{ selectedSeats, toggleSeat, clearSelection }}>
            {children}
        </BookingContext.Provider>
    );
};
