import React, { useContext } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";

import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from "./Context";



export const CustomDrawer = (props) => {

    const { signOut } = useContext(AuthContext)
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView contentContainerStyle={{ backgroundColor: "#8200d6" }} {...props}>
                <ImageBackground source={require('../assets/22.jpeg')} style={{ padding: 20 }}>
                    <Image source={require('../assets/1.jpg')} style={styles.image} />
                    <Text style={{ color: "#fff", fontSize: 18 }}>Kenneth Ocitti</Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
                <TouchableOpacity onPress={() => { signOut() }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text style={{ fontSize: 15, marginLeft: 5, fontFamily: 'sans-serif-medium', }}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    }
})