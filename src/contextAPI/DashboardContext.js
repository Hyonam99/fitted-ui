/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
    const [screen, setScreen] = useState('PROFILE');

    return (
        <DashboardContext.Provider
            value={{
                screen,
                setScreen,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};
