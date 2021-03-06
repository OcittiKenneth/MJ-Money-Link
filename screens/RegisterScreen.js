import React, { useContext, useState } from "react";
import { View, ScrollView, Text, StyleSheet, Button, TouchableOpacity, Dimensions, TextInput, StatusBar } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as animatable from 'react-native-animatable';
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../components/Context";
import { Picker } from "@react-native-picker/picker";
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';



export const Register = ({ navigation }) => {

    const { signUp } = useContext(AuthContext);


    const [data, setData] = React.useState({
        phone: '',
        password: "",
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        userName: "",
        firstName: "",
        lastName: "",
        dateOfBirth: '',
        idNumber: "",
        idType: "",
        address: '',
        email: ""
    })
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.IOS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    const registerHandler = (data) => {
        signUp(data);
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

    const handlePasswordChange = (val) => {

        setData({
            ...data,
            password: val
        })
    }
    const handleForgotPasswordChange = (val) => {
        setData({
            ...data,
            forgot_password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfimrSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={[styles.text_header, { marginBottom: -35, marginTop: 30, fontWeight: "normal" }]}>Register Now! </Text>
            </View >
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

                    <Text style={styles.textFooter}>Date</Text>
                    <View>
                        <Button onPress={showDatepicker} title="show date picker" />
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            dateFormat="day month year"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}

                    <Text style={styles.textFooter}>User Name</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="numeric"
                            style={styles.textInput}
                            placeholder="User Number"
                            onChangeText={(val) => handleUserName(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>First Name</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="numeric"
                            style={styles.textInput}
                            placeholder="First Number"
                            onChangeText={(val) => handleFisrtName(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>Last Name</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="numeric"
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
                            <Picker.Item label="PASSPORT" value="PASSPORT" />
                            <Picker.Item label="REFUGEE_LICENCE" value="REFUGEE_LICENCE" />
                            <Picker.Item label="DRIVER_LICENCE" value="DRIVER_LICENCE" />
                            <Picker.Item label="EMPLOYEE_ID" value="EMPLOYEE_ID" />
                            <Picker.Item label="NATIONAL_ID" value="NATIONAL_ID" />
                        </Picker>
                    </View>

                    <Text style={styles.textFooter}>ID Number</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="numeric"
                            style={styles.textInput}
                            placeholder="ID Number"
                            onChangeText={(val) => handleIDNumber(val)}
                        />
                    </View>

                    <Text style={styles.textFooter}>Address</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" color="#05375a" size={20} />
                        <TextInput
                            keyboardType="numeric"
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

                    <Text style={[styles.textFooter, { marginTop: 30 }]}>Password</Text>
                    <View style={styles.action}>
                        <FontAwesome name="lock" color="#05375a" size={20} />
                        <TextInput
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            placeholder="Password"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Feather name="eye-off" color="gray" size={20} />
                                :
                                <Feather name="eye" color="gray" size={20} />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => { registerHandler(data.phone, data.password,) }}
                            style={[styles.signIn, {
                                // borderColor: '#3CB371',
                                marginTop: 10,
                                backgroundColor: "#3CB371"
                            }]}
                        >
                            <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign], { color: "#009387" }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </animatable.View>
            </ScrollView>

        </View>
    )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387"
    },
    header: {
        flex: 0.2,
        justifyContent: "flex-end",
        paddingBottom: 50,
        paddingHorizontal: 20
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 10
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