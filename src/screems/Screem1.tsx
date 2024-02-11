import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { stylesGlobal } from '../theme/AppTheme';
import { ButtonComponent } from '../components/ButtonComponent';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Screem1 = ({navigation}:Props) => {

  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.containerTxtImg}>
        <Text style={stylesGlobal.text}>Bienvenido</Text>
        <Image 
        style={stylesGlobal.img}source={{uri:'https://www.paredro.com/wp-content/uploads/2019/03/5-softwares-para-desarrollo-de-aplicaciones-mo%CC%81viles.jpg'}}/>
      </View>
      <ButtonComponent onPress={()=>navigation.navigate('Screem2')} title='Acceder'/>
    </View>
  )
}


