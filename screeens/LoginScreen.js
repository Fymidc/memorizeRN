import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'

const LoginScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center",backgroundColor:"#FDFDBD" }} >
            <Image style={styles.image} source={require("../assets/images/loginbg.jpg")} />
            <TouchableOpacity activeOpacity={0.9} style={styles.button} >
                <IonIcons size={20} color="white" name="logo-google" />
                <Text style={styles.signinbutton}>SIGN IN WITH GOOGLE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    image: {
        marginTop: 50,
        height: 350,
        width: 350,
        borderRadius:15,
        elevation:5

    },
    signinbutton: {
        fontSize:18,
        paddingHorizontal:10,
        color:"white"
    },
    button: {
        backgroundColor:"tomato",
        marginVertical:55,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        borderRadius:15,
        elevation:8

    }
})