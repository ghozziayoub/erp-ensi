import React, { useContext, useEffect } from "react"
import { StyleSheet, View, Text, TouchableOpacity ,FlatList } from "react-native"
import { Feather } from "@expo/vector-icons"

import MemberContext from "./../../../context/MemberContext"

const MembersListScreen = ({ navigation }) => {

    const { data , getMembers , deleteMember } = useContext(MemberContext)

    useEffect(() => {
        getMembers()
    }, [])

    return (
        <View >
            <FlatList
                data={data}
                keyExtractor={member => member._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('MemberDetail', { _id: item._id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.firstname} {item.lastname}</Text>
                                <TouchableOpacity onPress={() => { deleteMember(item._id) }}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    );
}

MembersListScreen.navigationOptions = ({ navigation }) => {

    return {
        headerRight: () => {
            return (
                <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={() => navigation.navigate('MemberCreate')}>
                    <Feather name="plus" style={styles.icon} />
                </TouchableOpacity>
            )
        }
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default MembersListScreen