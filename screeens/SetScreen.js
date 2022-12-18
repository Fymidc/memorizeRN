import { View, Text, Button, StyleSheet, Pressable, ScrollView, Modal, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdvertisementArea from '../components/AdvertisementArea';
import Card from '../components/Card';
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcons from 'react-native-vector-icons/Ionicons'
import AddModalSecond from '../components/AddModalSecond';
import { fetchAllCards } from '../reducers/CardReducer';
import { deleteSet, fetchAllSets } from '../reducers/SetReducer';


const SetScreen = ({ route,navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCards(id))
  }, [])

  const ondeleteSet =(id)=>{
    dispatch(deleteSet(id)).then(()=>{
      navigation.goBack()
    })
  }

  const card = useSelector(card => card.card)


  const { setName, userName, termCount, id } = route.params;
  return (
    <View style={{ flex: 1 }} >
      <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
        <View >

          <Text style={{ color: "black", fontSize: 20, fontWeight: "800" }} >{setName}</Text>
          <View style={{ flexDirection: "row" }} >

            <Text style={{ fontSize: 16, fontWeight: "700" }} >{userName}</Text>
            <Text style={{ paddingHorizontal: 20, fontSize: 16, fontWeight: "700" }} >{termCount}</Text>
          </View>
        </View>
        <View>
          <IonIcons onPress={() => ondeleteSet(id)} name='trash-outline' size={24} />

        </View>

      </View>

      <AdvertisementArea />
      <Text style={{ padding: 20, fontSize: 17, fontWeight: "800", color: "black" }} >Cards</Text>

      <ScrollView>

        {card.loading ? <Text>Loading</Text> : Object.values(card.value).map((e, index) =>
          <Card key={index}
            id={e.id}
            definition={e.definition}
            term={e.term}
            setid={e.setid}
          />)}

      </ScrollView>

      <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
        <AntDesign style={{ position: "relative" }} name="plus" color={"white"} size={35} />
      </Pressable>

      <AddModalSecond setid={id} route={route.name} setModalVisible={setModalVisible} modalVisible={modalVisible} />


    </View>
  )
}

export default SetScreen

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'tomato',
    position: 'absolute',
    bottom: 50,
    right: 30,
    alignItems: "center",
    justifyContent: "center"
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