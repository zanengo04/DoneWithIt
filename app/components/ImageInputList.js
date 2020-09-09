import React from 'react'
import {View, StyleSheet} from 'react-native'
import ImageInput from './ImageInput';

export default function ImageInputList({imageUri=[], onRemoveImage, onAddImage}) {
   return(
       <View style={styles.container}>
           {imageUri.map(uri=> 
                <View key={uri} style= {styles.image}>
                    <ImageInput 
                        imageUri={uri} 
                        key={uri} 
                        onChangeImage={() => onRemoveImage(uri)} 
                    />
                </View>
                         )}  
                <ImageInput onChangeImage={uri=> onAddImage(uri)}/>
       </View>
   );
}

const styles= StyleSheet.create({
   container:{
       flexDirection: 'row'
   },
   image:{
       marginRight:10
   }
});