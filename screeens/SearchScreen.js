import { View, Text, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SetBox from '../components/SetBox'
import FolderBox from '../components/FolderBox'
import { useRoute } from '@react-navigation/native'


const SearchScreen = ({ navigation }) => {

  const route = useRoute();

  const [choosen, setchoosen] = useState("allresult")
  const [isfocus, setisfocus] = useState(false)


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
            onBlur={()=>setisfocus(false)}
            style={[styles.input,{paddingLeft:isfocus ? 10 : 0}]} />

          {isfocus ? <Ionicons style={{ paddingHorizontal: 10 }} name='close' size={16} /> : "" }

        </View>

        <View style={{ flex: 1 }} >


          <ScrollView alwaysBounceHorizontal horizontal contentContainerStyle={{ paddingHorizontal: 30, marginLeft: 30 }} >

            <Pressable onPress={() => setchoosen("allresult")} style={[styles.secim, { borderBottomWidth: choosen === "allresult" ? 1 : 0 }]}>
              <Text style={styles.secimtext} >All Results</Text>
            </Pressable>

            <Pressable onPress={() => setchoosen("sets")} style={[styles.secim, { borderBottomWidth: choosen === "sets" ? 1 : 0 }]}>
              <Text style={styles.secimtext}  >Sets</Text>
            </Pressable>

            <Pressable onPress={() => setchoosen("folders")} style={[styles.secim, { borderBottomWidth: choosen === "folders" ? 1 : 0 }]}>
              <Text style={styles.secimtext}  >Folders</Text>
            </Pressable>

          </ScrollView>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
        <ScrollView>

          <SetBox screen={route.name} />
          <SetBox screen={route.name} />
          <SetBox screen={route.name} />
          <FolderBox screen={route.name} />
          <FolderBox screen={route.name} />
          <FolderBox screen={route.name} />
        </ScrollView>
        <Text> {/*  after on click to input change this */}
          Search a folder or set
        </Text>
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