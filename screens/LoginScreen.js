import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput, StatusBar } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as animatable from 'react-native-animatable';

export const LoginScreen = () => {

    const [data, setData] = React.useState({
        phone: '',
        password: "",
        secureTextEntry: true
    })

    const textInputChange = (val) => {
        return (
            setData({
                ...data,
                phone: val
            })
        )
    }

    const handlePasswordChange = (val) => {

        setData({
            ...data,
            password: val
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                {/* <Image style={styles.logo} source={require('../assets/loan1.png')} /> */}
                {/* <Text style={styles.text_header}>MJ Money Link</Text> */}
                <Text style={[styles.text_header, { marginBottom: -35, marginTop: 30, fontWeight: "normal", alignSelf: "flex-start" }]}>Welcome! </Text>

            </View >
            <animatable.View style={styles.footer}>
                <Text style={styles.textFooter}>Phone</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput
                        keyboardType="numeric"
                        style={styles.textInput}
                        placeholder="Your Phone Number"
                        onChangeText={(val) => textInputChange(val)}
                    />

                    {data.check_textInputChange ?
                        <Feather name="eye-off" color="gray" size={20} />
                        : null}
                </View>
                <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>
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
                        onPress={() => alert("Login")}
                        style={[styles.signIn, {
                            borderColor: '#3CB371',
                            marginTop: 20,
                            backgroundColor: "#3CB371"
                        }]}
                    >
                        <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => alert("To sign up screen")}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign], { color: "#009387" }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </animatable.View>
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
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 50,
        paddingHorizontal: 20
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
        alignSelf: "center",
        marginTop: 10
    },
    footer: {
        flex: 2,
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
        marginTop: 50
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
        fontSize: 30
    },
    logo: {
        width: "25%",
        height: "40%",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 40,

    }
})