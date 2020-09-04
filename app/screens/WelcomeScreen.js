import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export default function WelcomeScreen(props) {
    return (
        <ImageBackground
        style = {styles.background} 
        source = {require('../assets/background.jpg')}></ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1
    }
})