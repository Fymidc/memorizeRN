import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={[styles.container,{justifyContent:props.title === "UserName" ? "center" :"space-between" }]} >
        <Text style={{letterSpacing:2,fontSize:30,color:"#600000",fontFamily:"LobsterTwo-Regular"
    }} >{props.title}</Text>
{props.title==="UserName" ? "" : <Text>İc</Text>}
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: "#FFD384",
         
         paddingHorizontal:25,
         flexDirection:"row",
         alignItems:"center",
          borderBottomRightRadius: 50,
          
    }
})

export default Header
