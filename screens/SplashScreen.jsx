import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Image style={styles.img} source={require('../assets/1.jpg')} />
            </View >
            <View style={styles.footer}>
                <Text style={styles.title}>You Are Welcome To MJ Money Link</Text>
                <Text style={styles.text}>Create an account </Text>
                <TouchableOpacity style={styles.button} onPress={() => alert("Login page")} >
                    <Text style={styles.btnText}>Get started</Text>
                    <MaterialIcons name="navigate-next" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
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
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    text: {
        marginVertical: 30,
        fontSize: 18,
        fontWeight: "700",
    },
    logo: {
        width: height
    }
    , btnText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    }
    ,
    title: {
        fontSize: 26,
        fontWeight: "600"
    },
    button: {
        backgroundColor: "#3CB371",
        flexDirection: "row",
        width: "40%",
        paddingHorizontal: 10,
        paddingVertical: 16,
        alignSelf: "flex-end",
        borderRadius: 10,
        marginVertical: 20,
        alignItems: "center",


    },
    img: {
        width: "30%",
        height: "30%",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 50
    }
})