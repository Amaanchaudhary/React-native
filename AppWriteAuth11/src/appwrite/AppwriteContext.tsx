import React, { createContext, FC, PropsWithChildren, useMemo, useState } from 'react'

import Appwrite from './service'

type AppContextType = {
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppWriteContext = createContext<AppContextType>({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => { }
})

export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const appwrite = useMemo(() => new Appwrite(), []);

    const defaultValues = {
        appwrite,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AppWriteContext.Provider value={defaultValues}>
            {children}
        </AppWriteContext.Provider>
    )
}

