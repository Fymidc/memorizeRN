/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react'
import { StatusBar } from 'react-native';
import TabNavigator from './utils/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screeens/SplashScreen';
import LoginScreen from './screeens/LoginScreen';


const RootStack = createNativeStackNavigator();
const  App =()=> {
  return (
    <NavigationContainer  >
       <StatusBar barStyle={'dark-content'} backgroundColor={"white"} />
      <RootStack.Navigator initialRouteName='Tabs' screenOptions={{headerShown:false}} >

        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Tabs" component={TabNavigator} />

      </RootStack.Navigator>
   
    </NavigationContainer>
  )
}

export default App;
