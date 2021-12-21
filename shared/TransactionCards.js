import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

export const Card = ({ title, image, onpressCard }) => {
    return (

        <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={image} />
            <TouchableOpacity onPress={onpressCard}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    cardContainer: {
        width: "40%",
        marginLeft: '5%',
        height: 250,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 20,
        marginRight: 10,
        alignItems: "center",
    },
    imageStyle: {
        height: 130,
        width: '90%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        opacity: 0.9,
        marginTop: 20

    },
    text: {
        fontSize: 20,
        fontWeight: "700",
        marginLeft: '5%',
        marginTop: 15,

    }
})
