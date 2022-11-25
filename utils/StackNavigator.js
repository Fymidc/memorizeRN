import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screeens/HomeScreen";
import FolderScreen from "../screeens/FolderScreen";
import SetScreen from "../screeens/SetScreen";
import AddModal from "./TabNavigator";
import LoginScreen from "../screeens/LoginScreen";
import SplashScreen from "../screeens/SplashScreen";
import UserScreen from "../screeens/UserScreen";
import SearchScreen from "../screeens/SearchScreen";
import AddmodalScreen from "../screeens/AddmodalScreen";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const UserStack = createStackNavigator();
const Stack = createStackNavigator();

export function StackScreen() {
  return (
    <Stack.Navigator  initialRouteName="Splash" >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
     
      <HomeStack.Screen name="Homestack" component={HomeScreen} />
      <HomeStack.Screen name="Folder" component={FolderScreen} />
      <HomeStack.Screen name="Set" component={SetScreen} />
     
    </HomeStack.Navigator>
  );
}

export function UserStackScreen() {
  return (
    <UserStack.Navigator screenOptions={{headerShown:false}}>
      
      <UserStack.Screen name="Userstack" component={UserScreen} />
      <UserStack.Screen name="Folder" component={FolderScreen} />
      <UserStack.Screen name="Set" component={SetScreen} />
    </UserStack.Navigator>
  );
}

export function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{headerShown:false}} >
      
      <SearchStack.Screen name="Searchstack" component={SearchScreen} />
      <SearchStack.Screen name="Folder" component={FolderScreen} />
      <SearchStack.Screen name="Set" component={SetScreen} />
    </SearchStack.Navigator>
  );
}


