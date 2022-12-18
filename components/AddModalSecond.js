import { Modal, View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createOneSet, getAllSetsByFoldersId } from '../reducers/SetReducer'
import { createOneCard, fetchAllCards } from '../reducers/CardReducer'

const AddModalSecond = (props) => {
 
  const [term, setterm] = useState("")
  const [definition, setdefinition] = useState("")
  const [setname, setsetname] = useState("")

  const dispatch = useDispatch()
//console.log("propsp set id",props.setid)
  const setData={
    id:"",
    title:setname,
    userid:1,
    avatar:"",
    folderid:props.folderid
  }
  const cardData={
    id:"",
    term:term,
    definition:definition,
    setid:props.setid
  }
 
   const createRequest =()=>{
   
    if(props.route === "Folder"){
        dispatch(createOneSet(setData)).then(()=>{
         
          dispatch(getAllSetsByFoldersId(props.folderid))
        })
    }else{
        dispatch(createOneCard(cardData)).then(()=>{
         
          dispatch(fetchAllCards(props.setid))
        })
    }
    props.setModalVisible(!props.modalVisible)
   }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}

    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          {props.route === "Set" ?
            <View>
              <View style={{ alignItems: "center" }} >
                <Text style={styles.modalText}>Term</Text>
                <TextInput onChangeText={setterm} style={{ width: 200, borderRadius: 10, paddingLeft: 10 }} placeholder='Term' />
              </View>

              <View style={{ alignItems: "center" }} >
                <Text style={styles.modalText}>Definition</Text>
                <TextInput onChangeText={setdefinition} style={{ width: 200, borderRadius: 10, paddingLeft: 10 }} placeholder='Definition' />
              </View>
            </View>
            :
            <View style={{ alignItems: "center" }} >
              <Text style={styles.modalText}>Set Name</Text>
              <TextInput onChangeText={setsetname} style={{ width: 200, borderRadius: 10, paddingLeft: 10 }} placeholder='Write a Name' />
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
              onPress={() => createRequest()}
            >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>

  )
}

export default AddModalSecond

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