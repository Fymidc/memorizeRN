import { View, Text, Pressable, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import AdvertisementArea from '../components/AdvertisementArea'
import SetBox from '../components/SetBox'
import FolderBox from '../components/FolderBox'

import { getFocusedRouteNameFromRoute, useIsFocused, useRoute } from '@react-navigation/native'
import { fetchAllUsers } from '../reducers/UserReducer'
import { fetchAllFolders } from '../reducers/FolderReducer'
import { fetchAllSets } from '../reducers/SetReducer'

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
      
      dispatch(fetchAllUsers())
      dispatch(fetchAllFolders())
      dispatch(fetchAllSets())
    }else {
      return
    }
  }, [isFocused])


  const user = useSelector(user => user.user)
  const folder = useSelector(folder => folder.folder)
  const set = useSelector(set => set.set)
  
  const route = useRoute();
  //const subroute = getFocusedRouteNameFromRoute(route)
  // console.log(  "Home den gelen",isFocused ? "Home" :  "" )

  return (

    <View style={{ flex: 1 }} >


      <ImageBackground source={require('../assets/images/bg.jpg')} style={{ width: '100%', height: '100%' }} >
        <View style={{ flex: 1 }} >

          <Header title={"Memorize"} />
        </View>

        <View style={{ flex: 5, backgroundColor: "#FAF9F6", justifyContent: "space-evenly", borderTopLeftRadius: 50 }} >

          <View  >
            <Text style={{ padding: 25, fontWeight: '800', fontSize: 16 }} >Sets</Text>
            <ScrollView

              showsHorizontalScrollIndicator={false} horizontal alwaysBounceHorizontal >
              {set.loading ? <Text>Loading</Text> : Object.values(set.value).map((val, index) =>
                <SetBox key={index}
                 payload={val}
                  navigation={navigation} />)}

            </ScrollView>
          </View>


          <View  >
            <Text style={{ padding: 25, fontWeight: '800', fontSize: 16 }}  >Folders</Text>
            <ScrollView horizontal alwaysBounceHorizontal showsHorizontalScrollIndicator={false}

            >

              {folder.loading ? <Text>Loading</Text> : Object.values(folder.value).map((e, index) =>
                <FolderBox key={index}
                  id={e.id}
                  userid={e.userid}
                  title={e.title}
                 
                  username={e.username}
                  
                  navigation={navigation} />)}

            </ScrollView>
          </View>


        </View>



        <AdvertisementArea />
      </ImageBackground>





    </View>

  )
}


export default HomeScreen;