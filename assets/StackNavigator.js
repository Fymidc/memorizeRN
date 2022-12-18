// import React from "react";
// import { createStackNavigator, TransitionPresets} from "@react-navigation/stack";
// import HomeScreen from "../screeens/HomeScreen";
// import FolderScreen from "../screeens/FolderScreen";
// import SetScreen from "../screeens/SetScreen";
// import LoginScreen from "../screeens/LoginScreen";
// import SplashScreen from "../screeens/SplashScreen";
// import UserScreen from "../screeens/UserScreen";
// import SearchScreen from "../screeens/SearchScreen";

// const HomeStack = createStackNavigator();
// const SearchStack = createStackNavigator();
// const UserStack = createStackNavigator();

// export function HomeStackScreen() {

//   return (
//     <HomeStack.Navigator screenOptions={() => ({...TransitionPresets.SlideFromRightIOS,headerShown:false})}>
     
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Folder" component={FolderScreen} />
//       <HomeStack.Screen name="Set" component={SetScreen} />
     
//     </HomeStack.Navigator>
//   );
// }

// export function UserStackScreen() {
//   return (
//     <UserStack.Navigator screenOptions={{headerShown:false}}>
      
//       <UserStack.Screen name="User" component={UserScreen} />
//       <UserStack.Screen name="Folder" component={FolderScreen} />
//       <UserStack.Screen name="Set" component={SetScreen} />
//     </UserStack.Navigator>
//   );
// }

// export function SearchStackScreen() {
//   return (
//     <SearchStack.Navigator screenOptions={() => ({...TransitionPresets.SlideFromRightIOS,headerShown:false})} >
      
//       <SearchStack.Screen name="Search" component={SearchScreen} />
//       <SearchStack.Screen name="Folder" component={FolderScreen} />
//       <SearchStack.Screen name="Set" component={SetScreen} />
//     </SearchStack.Navigator>
//   );
// }


