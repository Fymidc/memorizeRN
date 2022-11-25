import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'

const LoginScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center" }} >
            <Image style={styles.image} source={require("../utils/images/pexels-sample-bg.jpg")} />
            <TouchableOpacity activeOpacity={0.9} style={styles.button} >
                <IonIcons size={20} name="logo-google" />
                <Text style={styles.signinbutton}>SIGN IN WITH GOOGLE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    image: {
        marginTop: 25,
        height: 350,
        width: 350,
        borderRadius:15

    },
    signinbutton: {
        fontSize:18,
        paddingHorizontal:5
    },
    button: {
        backgroundColor:"tomato",
        marginVertical:55,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        borderRadius:15,
        elevation:5

    }
})