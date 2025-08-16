// FILE: src/App.jsx

import React from 'react';

// Providers
import { NavigationProvider } from './contexts/NavigationContext';
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import  Header  from './components/layout/Header';
import  Footer  from './components/layout/Footer';
import LoginModal  from './pages/LoginPage';

// Router Component
import AppRouter from './routes';

// این کامپوننت برای تزریق فونت و استایل‌های اولیه است
const StyleProvider = () => {
  React.useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const iconsLink = document.createElement('link');
    iconsLink.rel = "stylesheet";
    iconsLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(iconsLink);

    const customStyles = document.createElement('style');
    customStyles.innerHTML = `
            body { font-family: 'Vazirmatn', sans-serif; direction: rtl; }
            .fade-in { animation: fadeIn 0.5s ease-in-out; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            .modal-overlay { animation: fadeIn 0.3s ease; }
            .modal-content { animation: slideUp 0.4s ease; }
            @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        `;
    document.head.appendChild(customStyles);
  }, []);
  return null;
};


export default function App() {
  return (
      <NavigationProvider>
        <AuthProvider>
          <div className="bg-gray-50 min-h-screen text-gray-700">
            <StyleProvider />
            <Header />
            <main className="py-10">
              <AppRouter />
            </main>
            <Footer />
            <LoginModal />
          </div>
        </AuthProvider>
      </NavigationProvider>
  );
}
