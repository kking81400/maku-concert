import React, { useState } from 'react';
import { useNavigation } from '../../contexts/NavigationContext';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../common/Button';

export default function Header() {
    const { navigate } = useNavigation();
    const { isLoggedIn, logout, setShowLogin, user } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* لوگو */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
                    <i className="fa-solid fa-ticket text-3xl text-indigo-600"></i>
                    <span className="text-xl font-bold text-gray-800">کنسرت ماکو</span>
                </div>

                {/* دکمه منوی موبایل */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>

                {/* منوی دسکتاپ */}
                <div className="hidden md:flex items-center gap-6">
                    <a onClick={() => navigate('home')} className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">خانه</a>
                    <a onClick={() => navigate('concerts')} className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">همه کنسرت‌ها</a>
                    <a onClick={() => navigate('about')} className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">درباره ما</a>

                    {isLoggedIn ? (
                        <div className="flex items-center gap-4">
                            <Button onClick={() => navigate('profile')} variant="secondary">
                                <i className="fa-solid fa-user ml-2"></i>
                                {user.name}
                            </Button>
                            <a onClick={logout} className="text-gray-500 hover:text-indigo-600 cursor-pointer"><i className="fa-solid fa-right-from-bracket"></i></a>
                        </div>
                    ) : (
                        <Button onClick={() => setShowLogin(true)}>
                            <i className="fa-solid fa-user ml-2"></i>
                            ورود / ثبت‌نام
                        </Button>
                    )}
                </div>
            </nav>

            {/* منوی موبایل (باز/بسته شونده) */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t flex flex-col gap-4 p-4">
                    <a onClick={() => {navigate('home'); setMenuOpen(false)}} className="text-gray-600 hover:text-indigo-600 cursor-pointer">خانه</a>
                    <a onClick={() => {navigate('concerts'); setMenuOpen(false)}} className="text-gray-600 hover:text-indigo-600 cursor-pointer">همه کنسرت‌ها</a>
                    <a onClick={() => {navigate('about'); setMenuOpen(false)}} className="text-gray-600 hover:text-indigo-600 cursor-pointer">درباره ما</a>

                    {isLoggedIn ? (
                        <div className="flex flex-col gap-2">
                            <Button onClick={() => {navigate('profile'); setMenuOpen(false)}} variant="secondary">
                                <i className="fa-solid fa-user ml-2"></i>
                                {user.name}
                            </Button>
                            <a onClick={() => {logout(); setMenuOpen(false)}} className="text-gray-500 hover:text-indigo-600 cursor-pointer"><i className="fa-solid fa-right-from-bracket"></i> خروج</a>
                        </div>
                    ) : (
                        <Button onClick={() => {setShowLogin(true); setMenuOpen(false)}}>
                            <i className="fa-solid fa-user ml-2"></i>
                            ورود / ثبت‌نام
                        </Button>
                    )}
                </div>
            )}
        </header>
    );
}
