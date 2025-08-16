import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';

export default function LoginModal() {
    const { showLogin, setShowLogin, login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if(username.trim() && password.trim()) login(username);
        else alert('لطفا نام کاربری و رمز عبور را وارد کنید.');
    };

    return (
        <Modal show={showLogin} onClose={() => setShowLogin(false)} title="ورود به حساب کاربری">
            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">نام کاربری</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-0 transition" placeholder="مثلا: aliasadzadeh"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">رمز عبور</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-0 transition" placeholder="••••••••"/>
                </div>
                <Button type="submit" className="w-full text-lg">ورود</Button>
                <p className="text-center text-sm text-gray-500">
                    حساب کاربری ندارید؟ <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">ثبت نام کنید</a>
                </p>
            </form>
        </Modal>
    );
};
