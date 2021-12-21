import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import * as animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Picker } from "@react-native-picker/picker";
import { MyClients } from "../Data";
import { CheckBox } from 'react-native-elements'

export const EditAdmin = ({ route, navigation }) => {

    const [data, setData] = React.useState({
        phone: '',
        name: "",
        admin: "",
        permission1: false,
        role: ""
    })
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);

    const {
        itemId,
        name,
        enteredBy,
        date,
        mobile
    } = route.params;

    const onChangeRole = (itemValue) => {
        return (
            setData({
                ...data,
                role: itemValue
            })
        )
    }

    const textInputChange = (val) => {
        return (
            setData({
                ...data,
                phone: val
            })
        )
    }

    const handleUserName = (val) => {
        return (
            setData({
                ...data,
                userName: val
            })
        )
    }

    const handleFisrtName = (val) => {
        return (
            setData({
                ...data,
                firstName: val
            })
        )
    }

    const handleLastName = (val) => {
        return (
            setData({
                ...data,
                firstName: val
            })
        )
    }
    const onChangeIDType = (itemValue) => {
        return (
            setData({
                ...data,
                idType: itemValue
            })
        )
    }
    const handleIDNumber = (val) => {
        return (
            setData({
                ...data,
                idNumber: val
            })
        )
    }
    const handleAddress = (val) => {
        return (
            setData({
                ...data,
                address: val
            })
        )
    }
    const handleEmail = (val) => {
        return (
            setData({
                ...data,
                email: val
            })
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <ScrollView style={styles.footer}>
                <animatable.View>
                    <Text style={styles.textFooter}>Phone: {name}</Text>
                    <View style={styles.action}>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.textInput}
                            onChangeText={(val) => textInputChange(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>User Name: {name}</Text>
                    <View style={styles.action}>
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            onChangeText={(val) => handleUserName(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>First Name:{name}</Text>
                    <View style={styles.action}>
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            onChangeText={(val) => handleFisrtName(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>Last Name: {name}</Text>
                    <View style={styles.action}>
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            onChangeText={(val) => handleLastName(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>ID Type:</Text>
                    <View style={styles.pickerView}>
                        <Picker
                            selectedValue={data.idType}
                            onValueChange={(itemValue, itemIndex) =>
                                onChangeIDType(itemValue)
                            }>
                            <Picker.Item label="Select ID Type" value="id-type" />
                            <Picker.Item label="Passport" value="Passport" />
                            <Picker.Item label="Student" value="student" />
                            <Picker.Item label="Driver Permit" value="driver" />
                            <Picker.Item label="National ID" value="national-id" />
                        </Picker>
                    </View>

                    <Text style={styles.textFooter}>ID Number</Text>
                    <View style={styles.action}>
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            onChangeText={(val) => handleIDNumber(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>Address</Text>
                    <View style={styles.action}>
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            onChangeText={(val) => handleAddress(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>Email</Text>
                    <View style={styles.action}>
                        <TextInput
                            keyboardType="email-address"
                            style={styles.textInput}
                            onChangeText={(val) => handleEmail(val)}
                        />
                    </View>

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
                    <Text style={{ fontSize: 20, marginTop: 10, color: "gray" }}>Date: {date} </Text>


                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => alert("Add Transaction")}
                            style={[styles.signIn, {
                                borderColor: '#3CB371',
                                marginTop: 20,
                                backgroundColor: "#3CB371"
                            }]}
                        >
                            <Text style={[styles.textSign, { color: "#fff" }]}>Edit User </Text>
                        </TouchableOpacity>
                    </View>
                </animatable.View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pickerView: {
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "gray"
    },
    footer: {
        flex: 1.8,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,

    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold"
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        paddingBottom: 40,
        width: 180,
        alignSelf: "center"

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
        paddingBottom: 5
    },
    textFooter: {
        color: "gray",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 10
    },
    logo: {
        width: "25%",
        height: "44%",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 50,

    }
})