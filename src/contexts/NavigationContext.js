import React, { useState, createContext, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
    const [page, setPage] = useState('home');
    const [params, setParams] = useState({});

    const navigate = (targetPage, targetParams = {}) => {
        setPage(targetPage);
        setParams(targetParams);
        window.scrollTo(0, 0);
    };

    return (
        <NavigationContext.Provider value={{ page, params, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
};
