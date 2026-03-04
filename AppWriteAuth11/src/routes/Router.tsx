import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native"

import { AppWriteContext } from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'

//Routes
import AppStack from './AppStack'
import AuthStack from './AuthStack'

export const Router = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppWriteContext)

    console.log(isLoggedIn,"check");
    
    useEffect(() => {
        appwrite
            .getCurrentUserDetails()
            .then(response => {
                setIsLoading(false)
                if (response) {
                    setIsLoggedIn(true)
                }
            })
            .catch(_ => {
                setIsLoading(false)
                setIsLoggedIn(false)
            })
    }, [appwrite, setIsLoggedIn])

    if (isLoading) {
        return <Loading />
    }

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

