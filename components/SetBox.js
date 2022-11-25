import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const SetBox = (props) => {
  const {width} = Dimensions.get("window")
  //calculation thinkl about it later
  const nwidth = props.screen === "Home" ?  300  : props.screen === "Search" ? width/2+170 : 300

  return (
    <View style={[styles.container,{width:nwidth}]} >
      <View style={{flex:3}}>
        <Text>Slangs</Text>
        <Text>120 terms</Text>
      </View>

      <View style={{flex:1,flexDirection:"row" }} >
        <Text>U</Text>
        <Text style={{paddingHorizontal:10}} >Fatih bodur</Text>
      </View>
    </View>
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