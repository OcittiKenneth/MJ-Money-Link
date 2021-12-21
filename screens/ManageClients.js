import React, { useState } from "react";
import { View, Text, StyleSheet, Button, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { MyClients } from "../Data";
import { AddAmin } from "./AddAmin";

export const ManageClients = ({ navigation }) => {
    const [data, setData] = useState(MyClients);
    const [isLoading, setIsLoading] = useState(false);
    const [showNewTransaction, setShowNewTransaction] = useState(true);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    const separatorView = () => {
        return (
            <View
                style={{ borderWidth: 0.5, borderColor: "gray", width: "100%", marginHorizontal: 5 }}
            ></View>
        )
    }

    const renderUser = ({ item }) => {
        return (
            <View style={{ marginTop: 9 }}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <TouchableOpacity onPress={() => navigation.navigate('EditAdmin', {
                    itemId: item.id,
                    enteredBy: item.enteredBy,
                    date: item.date,
                    mobile: item.mobile,
                    name: item.name,

                })} activeOpacity={0.3} style={styles.item}>

                    <View style={styles.wrapText}>
                        <Text style={styles.text}>{item.name} </Text>
                        <Text style={styles.text}>Phone:{item.mobile} </Text>
                        <Text style={styles.text}>Entered By:{item.enteredBy} </Text>
                        <Text style={[styles.text, { color: "gray" }]}>{item.date} </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={renderUser}
                // ItemSeparatorComponent={separatorView}
                />
            )}
            <TouchableOpacity
                onPress={toggleModal}
                style={styles.floatingButton}
            >
                <Icon name='plus' size={22} color='#01a699' />
            </TouchableOpacity>

            <Modal isVisible={isModalVisible}>

                <View style={styles.floatView}>
                <View style={{backgroundColor:"#246EE9"}}>
                    <TouchableOpacity
                        onPress={toggleModal}
                        style={{ alignItems: "flex-end", marginRight: 20, top: 12 }}
                    >
                        <Entypo name='cross' size={29} color='#fff' />
                    </TouchableOpacity>
                        <Text style={styles.floatText}>Add New Client</Text>
                    </View>
                    <AddAmin buttonTitle="Add Client" />
                </View>
            </Modal>
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
    floatText: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 15,
        alignSelf: "center",
        color:"#fff",
    },
    close: {
        width: "80%"
    },
    floatView: {
        backgroundColor: "#fff",
        justifyContent: "center",
        borderRadius: 20,
        height: 630

    },
    floatingButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 100,
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
        justifyContent: "center",
        marginRight: 10,
        backgroundColor: "#4169E1",
        padding: 20,
        borderRadius: 10,
        height: 60,
        marginTop: 50

    },
    wrapText: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 5,
        marginHorizontal: 5,
        shadowColor: '#808080',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    item: {
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})


