import React, {useState} from 'react'
import { StyleSheet, Image } from 'react-native'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

export default function LoginScreen() {
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style ={styles.container}>
            <Image 
                style = {styles.logo}
                source ={require('../assets/logo-red.png')}/>
            <AppTextInput 
                placeholder="Email"
                icon="email"
                autoCapitalize = "none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                //only works on ios
                textContentType="emailAddress"
            />
            <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                textContentType="password"
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />
            <AppButton 
                title="login"
                onPress={() =>console.log(email,password)}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})