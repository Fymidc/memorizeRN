import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require("../utils/images/pexels-sample-bg.jpg")} />

        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    image:{

    }
})