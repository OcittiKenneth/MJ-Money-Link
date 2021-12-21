import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import { Picker } from "@react-native-picker/picker";


export const NewTransaction = () => {

    const [data, setData] = React.useState({
        phone: '',
        name: "",
        amount: "",
        admin: ""
    })
    const nameInputChange = (val) => {
        return (
            setData({
                ...data,
                name: val
            })
        )
    }

    const onChangeAdmin = (itemValue) => {
        return (
            setData({
                ...data,
                admin: itemValue
            })
        )
    }

    const phoneInputChange = (val) => {
        return (
            setData({
                ...data,
                phone: val
            })
        )
    }
    const amountInputChange = (val) => {
        return (
            setData({
                ...data,
                amount: val
            })
        )
    }
    console.log(data.admin);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View>
                <Text style={styles.textFooter}>Name</Text>
                <View style={styles.action}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your Name"
                        onChangeText={(val) => nameInputChange(val)}
                    />
                </View>

                <Text style={styles.textFooter}>Phone</Text>
                <View style={styles.action}>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.textInput}
                        placeholder="Your Phone Number"
                        onChangeText={(val) => phoneInputChange(val)}
                    />
                </View>

                <Text style={styles.textFooter}>Amount</Text>
                <View style={styles.action}>
                    <TextInput
                        keyboardType="numeric"
                        style={styles.textInput}
                        placeholder="Your Amount"
                        onChangeText={(val) => amountInputChange(val)}
                    />
                </View>

                <Text style={[styles.textFooter, { marginTop: 5 }]}>Date</Text>

                <Text style={styles.textFooter}>Entered By:</Text>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={data.admin}
                        onValueChange={(itemValue, itemIndex) =>
                            onChangeAdmin(itemValue)
                        }>
                        <Picker.Item label="Select Admin" value="java" />
                        <Picker.Item label="Walter" value="java" />
                        <Picker.Item label="Kenny" value="js" />
                        <Picker.Item label="Ronny" value="react-js" />
                        <Picker.Item label="Bosco" value="angular" />
                    </Picker>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => alert("Add Transaction")}
                        style={[styles.signIn, {
                            borderColor: '#3CB371',
                            marginTop: 20,
                            backgroundColor: "#3CB371"
                        }]}
                    >
                        <Text style={[styles.textSign, { color: "#fff" }]}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:50
    },
    pickerView: {
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "gray"
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },
    signIn: {
        width: "50%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: "gray"
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 5,
    },
    textFooter: {
        color: "gray",
        fontWeight: "bold",
        fontSize: 20,
    },
})