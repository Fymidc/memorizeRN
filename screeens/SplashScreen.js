import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Login")
      }, 1000);
    }, [])
    

    return (
        <View>
            <Image style={styles.image} source={require("../assets/images/splashbg.jpg")} />

        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    image:{
            width:"100%",
            height:"100%"
    }
})