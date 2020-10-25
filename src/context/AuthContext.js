import React, { useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import api from "./../api/server"

import { navigate } from "./../navigationRef"

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const tryLocalSignin = async () => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            setToken(token)
            setErrorMessage('')
            navigate('MembersList')
        }
        else {
            navigate('loginFlow')
        }
    }

    const clearErrorMessage = () => {
        setErrorMessage('')
    }

    const signin = async ({ email, password }) => {
        try {
            const response = await api.post('/member/login', { email, password })
            await AsyncStorage.setItem("token", response.data.token)
            setToken(token)
            setErrorMessage('')
            navigate('MembersList')
        } catch (error) {
            setErrorMessage('Something went wrong !')
        }
    }

    const signout = async () => {
        await AsyncStorage.removeItem("token")
        setToken(null)
        setErrorMessage('')
        navigate('loginFlow')
    }

    return (
        <AuthContext.Provider
            value={
                {
                    token,
                    errorMessage,
                    tryLocalSignin,
                    clearErrorMessage,
                    signin,
                    signout
                }
            }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext