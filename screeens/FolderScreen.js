import { View, Text, ScrollView, Pressable, StyleSheet, Modal, TextInput } from 'react-native'
import React from 'react'
import SetBox from '../components/SetBox';
import AntDesign from 'react-native-vector-icons/AntDesign'
import AddModalSecond from '../components/AddModalSecond';


const FolderScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const { folderName, userName } = route.params;

  return (
    <View style={{ flex: 1 }} >
      <View style={{ padding: 20, backgroundColor: "white" }} >

        <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }} >{folderName}</Text>
        <View style={{ flexDirection: "row" }} >

          <Text style={{ fontSize: 16, fontWeight: "700" }} >{userName}</Text>
          <Text style={{ paddingHorizontal: 20, fontSize: 16, fontWeight: "700" }} >1 Set</Text>
        </View>
      </View>


      <ScrollView contentContainerStyle={{ alignItems: "center" }} >

        <SetBox screen={route.name} navigation={navigation} />
      </ScrollView>

      <Pressable onPress={()=>setModalVisible(true)} style={styles.button}> 
        <AntDesign style={{position:"relative"}} name="plus" color={"white"} size={35}/>
      </Pressable>

      <AddModalSecond route={route.name} setModalVisible={setModalVisible} modalVisible={modalVisible} />

    </View>
  )
}

export default FolderScreen

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'tomato',
    position: 'absolute',
    bottom: 50,
    right: 30,
    alignItems:"center",
    justifyContent:"center"
  },
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
  bbutton: {
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