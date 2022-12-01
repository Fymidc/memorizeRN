import * as React from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackScreen, SearchStackScreen, UserStackScreen } from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RBSheet from 'react-native-raw-bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  const refRBSheet = React.useRef();
  const Placeholder = () => { return (<View />) }
  const [modalVisible, setModalVisible] = React.useState(false);
  const [focused, setisFocused] = React.useState(false);
  const [addchoosen, setaddchoosen] = React.useState("");

  // React.useEffect(() => {
  //     null
  // }, [focused])
  

  const openModal = (e) => {
    setisFocused(!focused)
    setModalVisible(true)
    if (e === "Set") {
      setaddchoosen("Set")

    }
    if (e === "Folder") {
      setaddchoosen("Folder")
    }

    refRBSheet.current.close()
  }

  const onmodalAdd = () => {
    setModalVisible(!modalVisible)
    console.log(modalVisible)
  }
  return (

    <View style={{ flex: 1 }}>
      <RBSheet
        height={200}
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: {
            borderRadius: 25
          },
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >

        <View style={styles.settingContainer} >
          <TouchableOpacity onPress={() => openModal("Folder")} activeOpacity={0.8} style={{ flexDirection: "row", padding: 20, alignItems: "center" }} >
            <AntDesign name='plus' size={20} color={"black"} />

            <Text style={{ fontSize: 16, color: "black", paddingHorizontal: 5 }} >Add Set</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => openModal("Folder")} activeOpacity={0.8} style={{ flexDirection: "row", padding: 20, alignItems: "center" }} >
            <AntDesign name='plus' size={20} color={"black"} />
            <Text style={{ fontSize: 16, color: "black", paddingHorizontal: 5 }} >Add Folder</Text>
          </TouchableOpacity>

        </View>

      </RBSheet>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}

      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            {addchoosen === "Set" ? <View style={{ alignItems: "center" }} >
              <Text style={styles.modalText}>Set Name</Text>
              <TextInput  style={{ width: 200, borderRadius: 10, paddingLeft: 10 }} placeholder='Write a Name' />
            </View>
              :
              <View style={{ alignItems: "center" }} >
                <Text style={styles.modalText}>Folder Name</Text>
                <TextInput  style={{ width: 200, borderRadius: 10, paddingLeft: 10 }} placeholder='Write a Name' />
              </View>}




            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible) }
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => onmodalAdd()}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

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


        <Tab.Screen listeners={({ route, navigation }) => ({
          state: () => {
            const subRoute = getFocusedRouteNameFromRoute(route)
            console.log(subRoute)
            if (subRoute === "Set") {
              navigation.setOptions({ tabBarStyle: { display: 'none' } });
            } else {
              navigation.setOptions({ tabBarStyle: { display: 'flex' } });
            }
          }

        })}


          name="Home" component={HomeStackScreen} />

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

const styles = StyleSheet.create({
  settingContainer: {

    flex: 1,
    paddingTop: 5


  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    zIndex: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    elevation: 2,
    width: 80,
    marginHorizontal: 10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    color: "black"
  }
})