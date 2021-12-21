import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, ActivityIndicator, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { MyClients } from "../Data";

import * as animatable from 'react-native-animatable';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ViewTransactions = ({ navigation }) => {
    const [data, setData] = useState(MyClients);
    const [myData, setMyData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showNewTransaction, setShowNewTransaction] = useState(true);


    const fetchCats = () => {
        fetch('http://172.105.79.201:8081/v1/users')
            .then(res => res.json())
            .then(resJson => {
                // setMyData(resJson)
                console.log(resJson);
            }).catch(e => console.log(e));
    }

    // useEffect(() => {
    //     fetchCats()
    //     console.log("uuubk");
    // }, [])

    AsyncStorage.getItem('token').then(token => {

        const headers = {
            'Content-Type': 'application/json',
            'Authentication': `Bearer ${token}`
        }

        fetch(
            "http://172.105.79.201:8081/v1/users",
            {
                headers: headers
            })
            .then(res => res.json())
            .then(resJson => {
                // setMyData(resJson)
                console.log(resJson)
            }).catch(e => console.log(e));
    });


    const [listData, setListData] = useState(
        MyClients.map((clientItem, index) => ({
            key: `${index}`,
            name: clientItem.name,
            amount: clientItem.amount

        }))
    )

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    }

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey)

        const newData = [...listData]
        const prevIndex = listData.findIndex(item => item.key === rowKey)
        newData.splice(prevIndex, 1)
        setListData(newData)


    }

    const updateShowTransaction = () => {
        setShowNewTransaction(false);
    }
    const VisibleItem = props => {
        const { data } = props;
        return (
            <View style={styles.rowFont}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <TouchableOpacity onPress={() => navigation.navigate("EditTransaction",
                    {
                        itemId: data.item.id,
                        name: data.item.name,
                        amount: data.item.amount,
                        enteredBy: data.item.enteredBy,
                        date: data.item.date,
                        mobile: data.item.mobile,
                    }
                )} style={styles.rowFrontVisible}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={styles.title} numberOfLines={1}>{data.item.name}</Text>
                            <Text style={styles.title} numberOfLines={1}>{data.item.amount}</Text>
                        </View>
                        <View >
                            {showNewTransaction ?
                                <View style={styles.textView}>
                                    <Text style={{ color: "#fff", fontWeight: "700" }}>New</Text>
                                </View> : null}
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }

    const renderItem = (data, rowMap) => {
        return <VisibleItem data={data} />
    }
    const HiddenItemWithActions = props => {
        const { onClose, onDelete } = props;

        return (
            <View style={styles.rowBack}>
                <TouchableOpacity onPress={onClose} style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                    <MaterialCommunityIcons style={styles.trash} name="close-circle-outline" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} style={[styles.backRightBtn, styles.backRightBtnRight]}>
                    <animatable.View style={styles.trash}>
                        <MaterialCommunityIcons name="trash-can-outline" size={25} color="#fff" />
                    </animatable.View>
                </TouchableOpacity>
            </View>
        )
    }

    const renderHiddenItem = (data, rowMap) => {
        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        )
    }



    const deleteItems = (id) => {
        console.log(id);
        const deletedClients = data.filter(client => client.id !== id)
        setData(deletedClients);
    }

    return (
        <View style={styles.container}>
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                disableRightSwipe
            />

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
        height: 37,
        justifyContent: "center",
        marginRight: 10,
        backgroundColor: "#4169E1",
        padding: 10,
        borderRadius: 10,

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
    ,

    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#666"
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7
    },
    backRightBtnRight: {
        backgroundColor: "red",
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    backRightBtnLeft: {
        backgroundColor: "#1f65ff",
        right: 75
    },
    backRightBtn: {
        alignItems: "flex-end",
        bottom: 0,
        justifyContent: 'center',
        position: "absolute",
        top: 0,
        width: 75,
        paddingRight: 17
    },
    rowBack: {
        alignItems: "center",
        backgroundColor: "#DDD",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5
    },
    details: {
        fontSize: 12,
        color: '#999'
    },
    rowFrontVisible: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15
    },
    rowFont: {
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 60,
        margin: 5,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    backTextWhite: {
        color: "#FFF"
    },
    container: {
        backgroundColor: "#f4f4f4",
        flex: 1
    }
})