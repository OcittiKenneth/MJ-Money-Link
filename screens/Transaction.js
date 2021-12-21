import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { MyClients } from "../Data";

import AntDesign from 'react-native-vector-icons/AntDesign'


export const Transactions = () => {
    

    const deleteItems = (id) => {
        console.log(id);
        const deletedClients = data.filter(client => client.id !== id)
        setData(deletedClients);
    }

    return (
        <View>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <TouchableOpacity activeOpacity={0.3} style={styles.item}>

                <View style={styles.wrapText}>
                    <Text style={[styles.text, {}]}>Name: {name} </Text>
                    <Text style={[styles.text, {}]}>Amount: {amount} </Text>
                    <Text style={styles.text}>Phone: {mobile} </Text>
                    <Text style={styles.text}>Entered By: {enteredBy}</Text>
                    <Text style={[styles.text, { color: "gray" }]}>Date: {date}</Text>
                </View>
                <View style={styles.textView}>
                    <TouchableOpacity style={styles.deleteItem} onPress={() => deleteItems(item.id)}>
                        <Text style={styles.deleteText}>Delete</Text>
                        <AntDesign name="delete" size={25} color="red" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: "#333",
        fontWeight: "bold",
        fontSize: 17,
        margin: 5
    },
    deleteText: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 10
    },
    deleteItem: {
        flexDirection: "row",
    },
    textView: {
        height: 60,
        justifyContent: "center",
        marginRight: 10,
        backgroundColor: "#4169E1",
        padding: 10,
        borderRadius: 10,
        marginTop: 50

    },
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    item: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10
    },
    container: {
        flex: 1,
    }
})