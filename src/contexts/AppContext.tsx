import React, { createContext, useState } from 'react';

type AppContextProps = {
    isAppLoaded: boolean;
    setIsAppLoaded: (loaded: boolean) => void;
};

export const AppContext = createContext<AppContextProps>({
    isAppLoaded: false,
    setIsAppLoaded: (loaded: boolean) => null,
});

const AppContextProvider: React.FC = ({ children }) => {
    const [isAppLoaded, setIsAppLoaded] = useState(false);
    return (
        <AppContext.Provider value={{ isAppLoaded, setIsAppLoaded }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContextProvider };
