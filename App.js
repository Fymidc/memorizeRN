/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react'
import { StatusBar } from 'react-native';
import TabNavigator, { HomeStackScreen, SearchStackScreen, UserStackScreen } from './utils/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screeens/SplashScreen';
import LoginScreen from './screeens/LoginScreen';
import HomeScreen from './screeens/HomeScreen';
import SearchScreen from './screeens/SearchScreen';
import UserScreen from './screeens/UserScreen';


const Stack = createNativeStackNavigator();
const loggedin = true
const App = () => {
  return (
    <NavigationContainer >
      {loggedin ?
        <TabNavigator />
        :
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>}


    </NavigationContainer>
  )
}

export default App;
