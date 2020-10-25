import React, { useContext, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import AuthContext from "./../context/AuthContext"

const AuthControllerScreen = () => {

    const { tryLocalSignin } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignin()
    }, [])

    return null
}

const styles = StyleSheet.create({})

export default AuthControllerScreen
