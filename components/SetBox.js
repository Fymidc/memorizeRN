import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const SetBox = (props) => {
  const {width} = Dimensions.get("window")
  //calculation thinkl about it later
  //console.log( "set gelen", props.screen)  

  return (
    <TouchableOpacity activeOpacity={0.9} 
    onPress={()=>props.navigation.navigate("Set",{setName:"Slangs",userName:"Fatih",termCount:120})} 
    style={[styles.container,{width:props.screen === "SearchStack" ? 350 : props.screen === "Folder" ? 350 : 300 }]} >
      <View style={{flex:3}}>
        <Text style={{fontSize:16, color:"black"}} >Slangs</Text>
        <Text>120 terms</Text>
      </View>

      <View style={{flex:1,flexDirection:"row" }} >
        <Text>U</Text>
        <Text style={{paddingHorizontal:10}} >Fatih bodur</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        height:110,
        borderRadius:10,
      
        flex:1,
        padding:20,
        backgroundColor:"white",
        elevation:1,
        marginHorizontal:15,
        marginTop:25
        
    }
})

export default SetBox