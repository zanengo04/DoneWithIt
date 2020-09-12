import React, {useState, useEffect} from 'react';
import { View, TextInput, Text, Switch, Image, Button } from 'react-native';
import {useFormikContext} from 'formik'
import * as ImagePicker from 'expo-image-picker'
import * as Permission from 'expo-permissions'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AppFormPicker from './app/components/forms'
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Link = () => {
  const navigation = useNavigation()
  return(
  <Button 
    title="Click"
    onPress={() => navigation.navigate("Details", {id:1})}
  />)
}

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
)

const Details = ({route}) =>(
  <Screen>
    <Text>Tweet Detail {route.params.id}</Text>
  </Screen>
)
const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerStyle:{backgroundColor:'dodgerblue'},
    headerTintColor: 'white',
    headerShown: true
  }}>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen 
      name="Details" 
      component={Details}
      options={{
        headerStyle:{backgroundColor:'tomato'},
        headerTintColor: 'white',
        headerShown: true
        }}
    />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor:'lightgrey',
      inactiveTintColor:'black'
    }}
  >
    <Tab.Screen 
      name ="Feed" 
      component={StackNavigator} 
      options={{tabBarIcon: ({size,color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>}}/>
    <Tab.Screen name ="Account" component={Account}/>
  </Tab.Navigator>
)

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
    
  );
}

