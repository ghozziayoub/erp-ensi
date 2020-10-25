import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { NavigationEvents } from "react-navigation"

import AuthContext from "./../../context/AuthContext"
import AuthForm from "./../../components/AuthForm"

const SigninScreen = () => {

    const { errorMessage, signin, clearErrorMessage } = useContext(AuthContext)

    return (

        <View style={styles.container}>

            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />

            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />

        </View>
    )
}

SigninScreen.navigationOptions = () => {

    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    spacer: {
        margin: 15
    },
    link: {
        color: 'blue'
    }

})

export default SigninScreen