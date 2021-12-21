import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import { Picker } from "@react-native-picker/picker";
import { CheckBox } from 'react-native-elements'



export const NewRoles = () => {

    const [data, setData] = React.useState({
        desc: '',
        name: "",
        amount: "",
        role: "",
        permission1: false
    })

    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);

    const nameInputChange = (val) => {
        return (
            setData({
                ...data,
                name: val
            })
        )
    }

    const onChangeRole = (itemValue) => {
        return (
            setData({
                ...data,
                role: itemValue
            })
        )
    }

    const handleDesc = (val) => {
        return (
            setData({
                ...data,
                desc: val
            })
        )
    }

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

                <Text style={styles.textFooter}>Description</Text>
                <View style={styles.action}>
                    <TextInput
                        keyboardType="default"
                        style={styles.textInput}
                        placeholder="Description"
                        onChangeText={(val) => handleDesc(val)}
                    />
                </View>

                <Text style={[styles.textFooter, { marginTop: 5 }]}>Date</Text>

                <Text style={styles.textFooter}>Roles:</Text>
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={data.role}
                        onValueChange={(itemValue, itemIndex) =>
                            onChangeRole(itemValue)
                        }>
                        <Picker.Item label="Select Role" value="java" />
                        <Picker.Item label="Super User" value="java" />
                        <Picker.Item label="Admin" value="js" />
                        <Picker.Item label="Ordinary User" value="react-js" />
                    </Picker>
                </View>

                <Text style={{ fontSize: 20, marginTop: 10, color: "gray" }}>Permissions</Text>
                <View style={{ width: 100, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ marginTop: 15, width: 200 }}>
                        <CheckBox
                            title='Read Application Users'
                            checked={isSelected}
                            onPress={() => setSelection(!isSelected)}
                        />
                    </View>

                    <View style={{ marginTop: 15, width: 200 }}>
                        <CheckBox
                            title='Write Application Users'
                            checked={isSelected2}
                            onPress={() => setSelection2(!isSelected2)}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15, width: 200 }}>
                    <CheckBox
                        title='Delete Application Users'
                        checked={isSelected3}
                        onPress={() => setSelection3(!isSelected3)}
                    />
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
                        <Text style={[styles.textSign, { color: "#fff" }]}>Add New Role</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
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