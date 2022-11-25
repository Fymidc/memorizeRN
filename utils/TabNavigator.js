import * as React from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackScreen, SearchStackScreen, StackScreen, UserStackScreen } from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RBSheet from 'react-native-raw-bottom-sheet';

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  const refRBSheet = React.useRef();
  const Placeholder = () => { return (<View />) }





  return (

    <View style={{ flex: 1 }}>

      
     
        <RBSheet
        
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            container:{
              borderRadius:25
            },
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
        >
        </RBSheet>
   

      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ?
              'home-outline' : 'home-outline'
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-outline' : "search-outline";
          } else if (route.name === 'Add') {
            iconName = focused ? 'add-circle-outline' : "add-circle-outline";
          } else if (route.name === 'User') {
            iconName = focused ? 'person-outline' : "person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,



      })} >


        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen}
          options={{ tabBarHideOnKeyboard: true }}
        />
        <Tab.Screen name="Add" component={Placeholder}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              refRBSheet?.current?.open()
              e.preventDefault()
             

            },

          })}
        />
        <Tab.Screen name="User" component={UserStackScreen} />
      </Tab.Navigator>
    </View>
  );
}

