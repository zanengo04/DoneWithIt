import React from 'react';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppButton from './app/components/AppButton';
import { View } from 'react-native';
export default function App() {
  return (
    // <ViewImageScreen/>
    // <WelcomeScreen />
    <View
    style ={{
      flex: 1,
      justifyContent:'center',
      alignItems: 'center'
    }}>
      <AppButton title ='Login' onPress={() =>console.log('Tapped')}/>
    </View>
    
  );
}

