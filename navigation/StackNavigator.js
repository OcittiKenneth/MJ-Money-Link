import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EditTransaction } from "../screens/EditTransactions";
import { EditAdmin } from "../screens/EditAdmin";
import { NavigationContainer } from "@react-navigation/native";
import { ViewTransactions } from "../screens/ViewTransactions";
import { HeaderBackButton } from "react-navigation";
import AntDesign from 'react-native-vector-icons/AntDesign'


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ViewTransactions" component={ViewTransactions} />
                <Stack.Screen options={{
                    title: 'Edit Transaction',
                    headerRight: () => (
                        <AntDesign name="delete" size={25} color="red" style={{ marginRight: 20 }} />
                    ),
                }} name="EditTransaction" component={EditTransaction} />
                <Stack.Screen name="EditAdmin" component={EditAdmin} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}