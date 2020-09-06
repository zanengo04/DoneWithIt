import React from 'react';
import { View } from 'react-native';

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
export default function App() {
  return (
    // <ViewImageScreen/>
    // <WelcomeScreen />
    // <MessagesScreen />
    // <ListingDetailsScreen />
    // <Screen>
    //   <ListItem 
    //     title ='My title' 
    //     subTitle ="My Subtitle" 
    //     ImageComponent={<Icon name="email"/>}/>
    // </Screen>

    <AccountScreen />
    
  );
}

