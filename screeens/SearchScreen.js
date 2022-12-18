import { View, Text, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SetBox from '../components/SetBox'
import FolderBox from '../components/FolderBox'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllSets } from '../reducers/SetReducer'
import { fetchAllFolders } from '../reducers/FolderReducer'


const SearchScreen = ({ navigation }) => {

  const route = useRoute();
  const dispatch = useDispatch()

  const [choosen, setchoosen] = useState("allresults")
  const [isfocus, setisfocus] = useState(false)

  const fetchData = (data) => {

    if (data === "sets") {
      dispatch(fetchAllSets())

    } else if (data === "folders") {

      dispatch(fetchAllFolders())

    } else if (data === "allresults") {
      dispatch(fetchAllFolders())
      dispatch(fetchAllSets())
    }
    setchoosen(data)

  }
  // useEffect(() => {
  //   if(choosen === "allresults"){

  //     dispatch(fetchAllFolders())
  //     dispatch(fetchAllSets())
  //   }
  // }, [])
  


  const folder = useSelector(folder => folder.folder)
  const set = useSelector(set => set.set)

  return (
    <View style={{ flex: 1 }} >
      <View style={{ zIndex: 1, backgroundColor: "white", elevation: 5, height: 120, paddingHorizontal: 10 }}>
        <View style={{
          backgroundColor: "#ececec",
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {isfocus ? "" : <Ionicons style={{ paddingHorizontal: 10 }} name='search' size={16} />}

          <TextInput

            placeholder='Search'
            onFocus={() => setisfocus(true)}
            onBlur={() => setisfocus(false)}
            style={[styles.input, { paddingLeft: isfocus ? 10 : 0 }]} />

          {isfocus ? <Ionicons style={{ paddingHorizontal: 10 }} name='close' size={16} /> : ""}

        </View>

        <View style={{ flex: 1 }} >


          <ScrollView alwaysBounceHorizontal horizontal contentContainerStyle={{ paddingHorizontal: 30, marginLeft: 30 }} >

            <Pressable onPress={() => fetchData("allresults")} style={[styles.secim, { borderBottomWidth: choosen === "allresults" ? 1 : 0 }]}>
              <Text style={styles.secimtext} >All Results</Text>
            </Pressable>

            <Pressable onPress={() => fetchData("sets")} style={[styles.secim, { borderBottomWidth: choosen === "sets" ? 1 : 0 }]}>
              <Text style={styles.secimtext}  >Sets</Text>
            </Pressable>

            <Pressable onPress={() => fetchData("folders")} style={[styles.secim, { borderBottomWidth: choosen === "folders" ? 1 : 0 }]}>
              <Text style={styles.secimtext}  >Folders</Text>
            </Pressable>

          </ScrollView>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
        <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical >




          {choosen === "sets" && set.loading === false ? Object.values(set.value).map((val, index) =>
            <SetBox key={index}
              payload={val}
              navigation={navigation} />) : ""}

          {choosen === "folders" && folder.loading === false ? Object.values(folder.value).map((e, index) =>
            <FolderBox key={index}
              id={e.id}
              userid={e.userid}
              title={e.title}

              username={e.username}

              navigation={navigation} />) : ""}

          {choosen === "allresults" && set.loading === false && folder.loading === false

            ?

            <View>{
              Object.values(set.value).map((val, index) =>
                <SetBox key={index}
                  payload={val}
                  navigation={navigation} />)
            }
              {
                Object.values(folder.value).map((e, index) =>
                  <FolderBox key={index}
                    id={e.id}
                    userid={e.userid}
                    title={e.title}

                    username={e.username}

                    navigation={navigation} />)
              }
            </View>
            :
            ""}
        </ScrollView>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#ececec',
    color: '#424242',
  },
  secim: {
    borderBottomColor: "tomato",
    flex: 1,
    width: 100,
    justifyContent: "center",

  },
  secimtext: {

    textAlign: "center"

  }
})

export default SearchScreen