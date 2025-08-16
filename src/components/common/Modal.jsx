import React from 'react';

export default function Modal({ show, onClose, title, children }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 modal-overlay" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md modal-content" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-5 border-b">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <i className="fa-solid fa-times text-2xl"></i>
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};
