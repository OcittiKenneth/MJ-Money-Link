import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './screens/LoginScreen';
import { Register } from './screens/RegisterScreen';
import { RootStackScreen } from './screens/RootStackScreen';
import { SplashScreen } from './screens/SplashScreen';



export default function App() {
  return (
    <Register />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
