import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FolderBox = (props) => {
//console.log(props.screeen)
const {id,userid,username,title} = props
  const {width} = Dimensions.get("window")
  //calculation thinkl about it later
  
  return (
    <TouchableOpacity activeOpacity={0.9}  onPress={()=>props.navigation.navigate("Folder",{folderName:title,userName:username,folderid:id})} 
    style={[styles.container,{width:props.screen === "SearchStack" ? 350 :300}]} >
      <View style={{flex:3}}>
        <Ionicons name='folder-outline' size={20} color={"black"} />
        <Text style={{fontSize:16, color:"black"}} >{title}</Text>
      </View>

      <View style={{flex:1,flexDirection:"row" }} >
        <Text style={{color:"tomato",fontWeight:"bold",textAlign:"center"}} >{username?.slice(0,1)}</Text>
        <Text style={{paddingHorizontal:10}} >{username}</Text>
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