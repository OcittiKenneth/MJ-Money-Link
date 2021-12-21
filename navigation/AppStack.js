import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from "../screens/Home";
import { ViewTransactions } from "../screens/ViewTransactions";
import { AddTransactions } from "../screens/AddTransactions";
import { ManageClients } from "../screens/ManageClients";
import { CustomDrawer } from "../components/CustomDrawer";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { ManageAmin } from "../screens/ManageAdmin";

import AntDesign from 'react-native-vector-icons/AntDesign'
import { createStackNavigator } from '@react-navigation/stack';
import { ManageRoles } from "../screens/ManageRoles";
import { EditAdmin } from "../screens/EditAdmin";
import { EditTransaction } from "../screens/EditTransactions";
import { TouchableOpacity } from "react-native";

const ViewTransactionStack = createStackNavigator();
const ManageStack = createStackNavigator();
const ManageAdminStack = createStackNavigator();

const Drawer = createDrawerNavigator();


const ViewTransaction = ({ navigation }) => {
    return (
        <ViewTransactionStack.Navigator >
            <ViewTransactionStack.Screen options={{
                headerShown: true,
                headerTintColor: "#246EE9",
                headerTitle: "View Transactions",
                headerStyle: {
                    backgroundColor: "#3EB489",
                },
                headerLeft: () => (
                    <Feather onPress={() => navigation.openDrawer()} name="menu" size={21} color="#000" style={{ marginLeft: 15 }} />
                ),
            }} name="ViewTransactions" component={ViewTransactions} />
            <ViewTransactionStack.Screen options={{
                title: 'Edit Transaction',
                headerTintColor: "#246EE9",
                headerStyle: {
                    backgroundColor: "#3EB489",
                },
                headerRight: () => (
                    <TouchableOpacity style={{ marginRight: 10 }} onPress={console.log("Pressed")} >
                        <AntDesign name="delete" size={25} color="red" style={{ marginRight: 20 }} />
                    </TouchableOpacity>
                ),
            }} name="EditTransaction" component={EditTransaction} />
        </ViewTransactionStack.Navigator>
    );
}


const ManageAdminS = ({ navigation }) => {
    return (
        <ManageAdminStack.Navigator >
            <ManageAdminStack.Screen options={{
                headerShown: true,
                headerTintColor: "#246EE9",
                headerStyle: {
                    backgroundColor: "#3EB489",
                },
                headerLeft: () => (
                    <Feather onPress={() => navigation.openDrawer()} name="menu" size={21} color="#000" style={{ marginLeft: 15 }} />
                ),
            }} name="Manage Admin" component={ManageAmin} />
            <ManageAdminStack.Screen options={{
                headerShown: true,
                headerTintColor: "#246EE9",
                headerStyle: {
                    backgroundColor: "#3EB489",
                },
            }} name="EditAdmin" component={EditAdmin} />
        </ManageAdminStack.Navigator>

    );
}

const Manage = ({ navigation }) => {
    return (
        <ManageStack.Navigator >
            <ManageStack.Screen options={{
                headerShown: true,
                headerTintColor: "#246EE9",
                headerStyle: {
                    backgroundColor: "#3EB489",
                },
                headerLeft: () => (
                    <Feather onPress={() => navigation.openDrawer()} name="menu" size={21} color="#000" style={{ marginLeft: 15 }} />
                ),
            }} name="Manage Clients" component={ManageClients} />
            <ManageStack.Screen options={{
                headerShown: true,
                headerTintColor: "#246EE9",
                headerStyle: {
                    backgroundColor: "#3EB489",
                },
            }} name="EditAdmin" component={EditAdmin} />
        </ManageStack.Navigator>

    );
}


export const AppStack = () => {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: "#aa18ea",
                drawerActiveTintColor: "#fff",
                drawerInactiveTintColor: "#333",
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 16,
                    fontFamily: 'sans-serif-medium',
                    fontWeight: 'normal',
                }
            }}
        >
            <Drawer.Screen name='Home' component={Home} options={{
                headerTitleAlign: "center",
                headerTitle: "MJ Money Link",
                drawerIcon: ({ color }) => (
                    <Ionicons name="home" size={22} color={color} />
                )
            }} />
            <Drawer.Screen name='View Transactions' component={ViewTransaction}
                options={{
                    headerShown: false,
                    headerTitleAlign: "center",
                    drawerIcon: ({ color }) => (
                        <Ionicons name="medkit-outline" size={22} color={color} />
                    )
                }} />
            <Drawer.Screen name='Add Transaction' component={AddTransactions}
                options={{
                    title: 'Add New Transactions',
                    headerTitleAlign: "center",
                    drawerIcon: ({ color }) => (
                        <Ionicons name="ios-add" size={22} color={color} />
                    )
                }} />
            <Drawer.Screen name='Manage Clients' component={Manage}
                options={{
                    headerShown: false,
                    headerTitleAlign: "center",
                    drawerIcon: ({ color }) => (
                        <Ionicons name="journal" size={22} color={color} />
                    )
                }} />
            <Drawer.Screen name='Manage Admins' component={ManageAdminS}
                options={{
                    headerShown: false,
                    headerTitleAlign: "center",
                    drawerIcon: ({ color }) => (
                        <Ionicons name="journal" size={22} color={color} />
                    )
                }} />
            <Drawer.Screen name='Manage Roles' component={ManageRoles}
                options={{
                    title: 'Manage Roles',
                    headerTintColor: "#3EB489",
                    headerTitleAlign: "center",
                    drawerIcon: ({ color }) => (
                        <Ionicons name="journal" size={22} color={color} />
                    )
                }} />
        </Drawer.Navigator>
    )
}

// #246EE9
// #3EB489
// #FF2400