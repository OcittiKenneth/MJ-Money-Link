import React from "react";

import { SplashScreen } from "../screens/SplashScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { Register } from "../screens/RegisterScreen";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export const AuthStack = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Splash' component={SplashScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}