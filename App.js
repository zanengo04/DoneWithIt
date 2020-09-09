import React, {useState, useEffect} from 'react';
import { View, TextInput, Text, Switch, Image, Button } from 'react-native';
import {useFormikContext} from 'formik'
import * as ImagePicker from 'expo-image-picker'
import * as Permission from 'expo-permissions'

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
const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Camera", value: 3},

]
export default function App() {
  const [imageUris, setImageUris] = useState([])
  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }
  const handleRemove = uri =>{
    setImageUris(imageUris.filter(imageUris => imageUris != uri))
  }


  return (
    <Screen>
      
      <ImageInputList 
        imageUri={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
    
  );
}

