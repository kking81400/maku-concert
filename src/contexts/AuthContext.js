import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const login = (username) => {
        setUser({ name: username, email: `${username.toLowerCase()}@example.com` });
        setIsLoggedIn(true);
        setShowLogin(false);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    const value = { isLoggedIn, user, login, logout, showLogin, setShowLogin };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
