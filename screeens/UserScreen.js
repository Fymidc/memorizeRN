import { View, Text, Pressable, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import AdvertisementArea from '../components/AdvertisementArea'
import SetBox from '../components/SetBox'
import FolderBox from '../components/FolderBox'
import { useIsFocused, useRoute } from '@react-navigation/native'

const UserScreen = ({ navigation }) => {

  const route =useRoute();
  //console.log("userdan gelen", isFocused ? "userscreen" :"")

  return (

    <View style={{ flex: 1 }} >


      <ImageBackground source={require('../utils/images/bg.jpg')} style={{ width: '100%', height: '100%' }} >
        <View style={{ flex: 1 }} >

          <Header title={"UserName"}/>
        </View>

        <View style={{ flex: 5, backgroundColor: "#FAF9F6", justifyContent:"center", borderTopLeftRadius: 50 }} >

          <View  >
            <Text style={{padding:25,fontWeight:'800',fontSize:18,color:"black"}} >Sets</Text>
            <ScrollView
              
              showsHorizontalScrollIndicator={false} horizontal alwaysBounceHorizontal >

              <SetBox screen={route.name}/>
              <SetBox screen={route.name} />
              <SetBox screen={route.name} />
              <SetBox screen={route.name} />
            </ScrollView>
          </View>


          <View  >
            <Text style={{padding:25,fontWeight:'800',fontSize:16,color:"black"}}  >Folders</Text>
            <ScrollView horizontal alwaysBounceHorizontal showsHorizontalScrollIndicator={false}
        
            >

              <FolderBox screen={route.name} />
              <FolderBox screen={route.name} />
              <FolderBox screen={route.name} />
              <FolderBox screen={route.name} />
            </ScrollView  >
          </View>


        </View>



        
      </ImageBackground>





    </View>

  )
}


export default UserScreen;