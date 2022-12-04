import { View, Text, Pressable, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import AdvertisementArea from '../components/AdvertisementArea'
import SetBox from '../components/SetBox'
import FolderBox from '../components/FolderBox'
import { getFocusedRouteNameFromRoute, useIsFocused, useRoute } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {

  const route =useRoute();
  //const subroute = getFocusedRouteNameFromRoute(route)
 // console.log(  "Home den gelen",isFocused ? "Home" :  "" )

  return (

    <View style={{ flex: 1 }} >


      <ImageBackground source={require('../utils/images/bg.jpg')} style={{ width: '100%', height: '100%' }} >
        <View style={{ flex: 1 }} >

          <Header title={"Memorize"}/>
        </View>

        <View style={{ flex: 5, backgroundColor: "#FAF9F6", justifyContent:"space-evenly", borderTopLeftRadius: 50 }} >

          <View  >
            <Text style={{padding:25,fontWeight:'800',fontSize:16}} >Sets</Text>
            <ScrollView
              
              showsHorizontalScrollIndicator={false} horizontal alwaysBounceHorizontal >

              <SetBox navigation={navigation}  />
              <SetBox screen={route.name}/>
              <SetBox screen={route.name}/>
              <SetBox screen={route.name}/>
            </ScrollView>
          </View>


          <View  >
            <Text style={{padding:25,fontWeight:'800',fontSize:16}}  >Folders</Text>
            <ScrollView horizontal alwaysBounceHorizontal showsHorizontalScrollIndicator={false}
        
            >

              <FolderBox screen={route.name} navigation={navigation} />
              <FolderBox screen={route.name} />
              <FolderBox  screen={route.name}/>
              <FolderBox screen={route.name}/>
            </ScrollView>
          </View>


        </View>



        <AdvertisementArea />
      </ImageBackground>





    </View>

  )
}


export default HomeScreen;