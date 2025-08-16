import React from 'react';
import Seat from './Seat';

export default function SeatMap({ concert }) {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
            <div className="mb-4 p-3 bg-gray-800 text-white text-center rounded-lg font-bold text-lg shadow-inner">
                استیج
            </div>
            <div className="space-y-3">
                {concert.seatMap.map((row) => (
                    <div key={row.row} className="flex items-center gap-2 sm:gap-3">
                        <span className="w-6 font-bold text-gray-500">{row.row}</span>
                        <div className="flex-1">
                            <div className="overflow-x-auto sm:overflow-x-visible">
                                <div className="grid grid-flow-col sm:grid-flow-row sm:grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-1 sm:gap-2">
                                    {row.seats.map(seat => <Seat key={seat.id} seat={seat} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center items-center gap-x-6 text-sm flex-wrap">
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-indigo-100 border border-indigo-300"></div><span>آزاد</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-green-500"></div><span>انتخاب شما</span></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-gray-300"></div><span>فروخته شده</span></div>
            </div>
        </div>
    );
};
