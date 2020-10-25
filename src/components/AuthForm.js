import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Text, Input, Button } from "react-native-elements"

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <View style={styles.spacer}>
                <Text h3>{headerText}</Text>
            </View>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View style={styles.spacer} />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View style={styles.spacer}>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </View>

            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
        </>
    )
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    },
    errorStyle: {
        color: 'red',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 15
    },
})

export default AuthForm