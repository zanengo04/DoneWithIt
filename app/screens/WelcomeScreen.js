import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

import routes from '../navigation/Routes'
import AppButton from '../components/AppButton'
export default function WelcomeScreen({navigation}) {
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
                <AppButton title ='Login' onPress={() => navigation.navigate(routes.LOGIN)}/>
                <AppButton title ='Register' color = 'secondary' onPress={() => navigation.navigate(routes.REGISTER)}/>
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