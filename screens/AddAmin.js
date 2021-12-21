import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import * as animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Picker } from "@react-native-picker/picker";
import { MyClients } from "../Data";



export const AddAmin = ({ buttonTitle }) => {

    const [data, setData] = React.useState({
        phone: '',
        name: "",
        admin: ""
    })


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
                    <Text style={styles.textFooter}>Phone</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="numeric"
                            style={styles.textInput}
                            placeholder="Your Phone Number"
                            onChangeText={(val) => textInputChange(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>User Name</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            placeholder="User Number"
                            onChangeText={(val) => handleUserName(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>First Name</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            placeholder="First Number"
                            onChangeText={(val) => handleFisrtName(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>Last Name</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            placeholder="First Number"
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
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            placeholder="ID Number"
                            onChangeText={(val) => handleIDNumber(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>Address</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="default"
                            style={styles.textInput}
                            placeholder="Address"
                            onChangeText={(val) => handleAddress(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="email-address"
                            style={styles.textInput}
                            placeholder="Address"
                            onChangeText={(val) => handleEmail(val)}
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
                            <Text style={[styles.textSign, { color: "#fff" }]}>{buttonTitle}</Text>
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
        paddingBottom: 40

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