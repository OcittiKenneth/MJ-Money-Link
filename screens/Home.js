import React from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import { Card } from "../shared/TransactionCards";

import viewTransactionImg from '../assets/23.jpeg'
import addTransactionImg from '../assets/22.jpeg'
import clientTransactionImg from '../assets/24.jpeg'
import adminTransactionImg from '../assets/25.jpeg'


export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Card title='Add Transaction' image={addTransactionImg} onpressCard={() => navigation.navigate('Add Transaction')} />
                <Card title='View Transactions' image={viewTransactionImg} onpressCard={() => navigation.navigate('View Transactions')} />
            </View>
            <View style={{ flexDirection: "row" }}>
                <Card title='Add Admin/Field Boy' image={clientTransactionImg} onpressCard={() => navigation.navigate('Manage Admins')} />
                <Card title='My Clients' image={adminTransactionImg} onpressCard={() => navigation.navigate('Manage Clients')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },

})