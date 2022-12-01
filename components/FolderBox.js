import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const FolderBox = (props) => {

  const {width} = Dimensions.get("window")
  //calculation thinkl about it later
  const nwidth = props.screen === "Home" ?  300  : props.screen === "Search" ? width/2+170 : width-50

  return (
    <TouchableOpacity activeOpacity={0.9}  onPress={()=>props.navigation.navigate("Folder",{folderName:"Phrasal Verb",userName:"Fatih bodur"})} 
    style={[styles.container,{width:nwidth}]} >
      <View style={{flex:3}}>
        <Text>Dosya icon</Text>
        <Text>Phrasal verbs</Text>
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
        width:300,
        flex:1,
        padding:20,
        backgroundColor:"white",
        elevation:1,
        borderRadius:10,
        marginHorizontal:15,
        marginTop:25
        
    }
})

export default FolderBox