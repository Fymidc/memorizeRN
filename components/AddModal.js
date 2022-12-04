import { Modal, View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'

const AddModal = (props) => {

  const onmodalAdd = () => {
    props.setModalVisible(!props.modalVisible)
    console.log(props.modalVisible)
  }

  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}

      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            {props.addchoosen === "Set" ? <View style={{ alignItems: "center" }} >
              <Text style={styles.modalText}>Set Name</Text>
              <TextInput style={{ width: 200, borderRadius: 10, paddingLeft: 10 }} placeholder='Write a Name' />
            </View>
              :
              <View style={{ alignItems: "center" }} >
                <Text style={styles.modalText}>Folder Name</Text>
                <TextInput style={{ width: 200, borderRadius: 10, paddingLeft: 10 }} placeholder='Write a Name' />
              </View>}




            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.setModalVisible(!props.modalVisible)}
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
  
  )
}

export default AddModal

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "rgba(153, 153, 153, 0.2)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    zIndex: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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