import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useReducer } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { AuthStack } from './navigation/AuthStack';
import { AppStack } from './navigation/AppStack';

import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from './components/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';



export default function App() {

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    phone: null,
  }

  const loginReducer = (prevSate, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevSate,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevSate,
          phone: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevSate,
          userToken: null,
          phone: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevSate,
          phone: action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  const authContext = useMemo(() => ({

    signIn: async (phone, password) => {
      let userToken;
      userToken = null;

      const credentials = {
        username: phone,
        password: password
      }

      await axios.post("http://172.105.79.201:8081/v1/users/authenticate", credentials)
        .then((response) => {
          let userToken = response.data.token
          AsyncStorage.setItem('token', userToken);
          dispatch({ type: "LOGIN", phone: phone, token: userToken })
          console.log(userToken);
        })
        .catch((err) => {
          let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
          console.warn("error", message);
        });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken')

      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "LOGOUT" })
    },
    signUp: async (data) => {
      let userToken;
      userToken = null;

      const requestData = {
        phoneNumber: data.phone,
        password: data.password,
        username: data.userName,
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        idNumber: data.idNumber,
        idType: data.idType,
        address: data.address,
        email: data.email
      }
      console.log("Hey : " + data);
      SecureStore.getItemAsync('token').then(token => {

        const headers = {
          'Content-Type': 'application/json',
          'Authentication': `Bearer ${token}`
        }

        axios.post(
          "http://172.105.79.201:8081/v1/users",
          requestData,
          { headers: headers })
          .then((response) => {
            let signUpResponse = response.data
            console.log("Sign up successful: " + signUpResponse)
          })
          .catch((err) => {
            let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
            console.warn("error", message);
          });
        dispatch({ type: "REGISTER", id: phone, token: userToken })
      });
    }
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: "REGISTER", token: userToken })
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken == null ? (
          <AppStack />

        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
      {/* <DateTime /> */}
    </AuthContext.Provider>
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
