import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export const ListClients = ({ name, mobile, bussiness }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flex: 1 }}>
                <Text style={{ color: "#333", fontSize: 19 }}>{name}</Text>
                <Text style={{ color: "#333", fontSize: 19 }}>Bussiness:  {bussiness}</Text>
            </TouchableOpacity>
            <View style={{ padding: 10, width: 140 }}>
                <Text style={{ color: "#333", fontSize: 19 }}>{mobile}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    }
})