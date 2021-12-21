import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export const ListRoles = ({ name, mobile, desc }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flex: 1 }}>
                <Text style={{ color: "#333", fontSize: 19 }}>{name}</Text>
                <Text style={{ color: "#333", fontSize: 19 }}>Desc:  {desc}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    }
})