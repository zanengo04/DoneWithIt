import React from 'react'
import { StyleSheet, Image } from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

export default function LoginScreen() {
    return (
        <Screen style ={styles.container}>
            <Image 
                style = {styles.logo}
                source ={require('../assets/logo-red.png')}/>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors}) => (
                    <>
                        <AppTextInput 
                            placeholder="Email"
                            icon="email"
                            autoCapitalize = "none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            //only works on ios
                            textContentType="emailAddress"
                        />
                        <AppText style={{color: 'red'}}>{errors.email}</AppText>
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            textContentType="password"
                            secureTextEntry
                            onChangeText={handleChange("password")}
                        />
                        <AppText style={{color: 'red'}}>{errors.password}</AppText>
                        <AppButton 
                            title="login"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            
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