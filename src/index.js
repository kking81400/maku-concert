// FILE: src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// استایل‌های عمومی و فونت‌ها در این فایل ایمپورت می‌شوند
import './output.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
