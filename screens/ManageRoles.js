import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, StatusBar } from 'react-native';

import Feather from "react-native-vector-icons/Feather";
import { MyClients } from "../Data";
import { CustomSwtich } from "../shared/CustomSwitch";
import { ListRoles } from "./ListRoles";
import { NewRoles } from "./NewRoles";

export const ManageRoles = () => {

    const [transactionTab, setTransactionTab] = useState(1);
    const [search, setSearch] = useState('');
    const [filterData, setFilterData] = useState([])

    const onSelectSwitch = (value) => {
        setTransactionTab(value)
    }

    const searchFilter = (text) => {
        console.log(text);
        if (text) {
            const newData = MyClients.filter((item) => {
                const itemData = item.mobile ? item.mobile.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData)
            setSearch(text)
        } else {
            setFilterData(MyClients);
            setSearch(text)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <ScrollView style={styles.itemScroll}>
                {/* <Text style={{ fontSize: 18, fontWeight: '700' }}>Add Transaction</Text> */}

                <View style={styles.transaction_view}>
                    <Feather style={{ marginRight: 5 }} name="search" size={20} color="#C6C6C6" />
                    <TextInput
                        value={search}
                        onChangeText={searchFilter}
                        placeholder="Search Roles" />
                </View>
                <View>
                    <CustomSwtich onSelectSwitch={onSelectSwitch} selectionMode={1} option1="Roles" option2="New Roles" />
                </View>
                {transactionTab == 1 && MyClients.map(item => (
                    <ListRoles key={item.id}  {...item} />
                ))}
                {transactionTab == 2 && <NewRoles />}
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemScroll: {
        padding: 20,
        backgroundColor: "#fff",
    },
    transaction_view: {
        flexDirection: "row",
        borderColor: "#C6C6C6",
        borderWidth: 1, borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginTop: 12
    }
})