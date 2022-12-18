import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const SetBox = (props) => {
  //console.log("payload",[props.payload]) 
  const {width} = Dimensions.get("window")
  //calculation thinkl about it later
 /console.log( "set gelen", props.payload)  

  return (
    <TouchableOpacity activeOpacity={0.9} 
    onPress={()=>props.navigation.navigate("Set",{setName:props.payload?.title,id:props.payload?.id,userName:props.payload?.userName,termCount:props.payload?.termAmount})} 
    style={[styles.container,{width:props.screen === "SearchStack" ? 350 : props.screen === "Folder" ? 350 : 300 }]} >
      <View style={{flex:3}}>
        <Text style={{fontSize:16, color:"black"}} >{props.payload?.title}</Text>
        <Text>{props.payload?.termAmount} terms</Text>
      </View>

      <View style={{flex:1,flexDirection:"row",alignContent:"center"}} >
        <Text style={{color:"tomato",fontWeight:"bold",borderRadius:50,textAlign:"center"}} >{props.payload?.userName?.slice(0,1)}</Text>
        <Text style={{paddingHorizontal:10}} >{props.payload?.userName}</Text>
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