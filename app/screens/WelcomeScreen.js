import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

import AppButton from '../components/AppButton'
export default function WelcomeScreen(props) {
    return (
        <ImageBackground
        blurRadius={2}
        style = {styles.background} 
        source = {require('../assets/background.jpg')}>
            <View style ={styles.logoContainer}>
                <Image style = {styles.logo} source={require('../assets/logo-red.png')}></Image>
                <Text style ={styles.tagLine}>Sell what you don't need</Text>
            </View>
            <View style = {styles.buttonContainer}>
                <AppButton title ='Login'/>
                <AppButton title ='Register' color = 'secondary'/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems :'center'
    },
    buttonContainer:{
        padding:5,
        width:'100%'
    },
    tagLine:{
        fontSize: 25,
        fontWeight: "bold",
        paddingVertical: 20,
    }
    
})