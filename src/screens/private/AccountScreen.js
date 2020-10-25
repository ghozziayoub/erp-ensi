import React, { useContext } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Button } from "react-native-elements"
import { SafeAreaView } from "react-navigation"
import AuthContext from "./../../context/AuthContext"

const AccountScreen = () => {

    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={styles.spacer}>
                <Button
                    title="Sign out"
                    onPress={signout}
                />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    },
})

export default AccountScreen