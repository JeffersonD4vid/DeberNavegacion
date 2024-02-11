import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ButtonComponent } from '../components/ButtonComponent'
import { InputComponents } from '../components/InputComponents';
import { stylesGlobal } from '../theme/AppTheme';


interface Numeros{
    num1:string;
    num2:string;
}


export const Screem2 = () => {


  const [numeros, setNumeros] = useState<Numeros>({
    num1:'',
    num2:''
  })

  const [total, setTotal] = useState('');

  const handlerChangeText = (name:string, value:string) =>{
    setNumeros((prevNumeros) => ({
      ...prevNumeros,
      [name]: value
    }));
  }


  const division = () => {

    const numero1 = parseFloat(numeros.num1);
    const numero2 = parseFloat(numeros.num2);

    
    if (numero1 == 0 && numero2 == 0) {
      setTotal('¡Indeterminacion!');
    } else if (numero2 == 0){
      setTotal('¡No existe division para cero!');
    }else{
      const resultado = numero1 / numero2;
      setTotal(`El resultado de la división es ${resultado.toString()}`)
    }

  }


  return (
    <View style={stylesGlobal.container}>
     
      <Text style={stylesGlobal.text}> Formulario Division</Text>

      <View>
          <Text style={stylesGlobal.textScreem2}>Ingrese el primer numero</Text>
            <InputComponents name='num1' onChangeText={handlerChangeText}/>
          <Text style={stylesGlobal.textScreem2}>Ingrese el segundo numero</Text>
            <InputComponents name='num2' onChangeText={handlerChangeText}/>
      </View> 

      <View style={styles.containerBtn}>
          <ButtonComponent title='Dividir' onPress={division} />
      </View>

      <View style={styles.contentResultado}>
          <Text style={stylesGlobal.textScreem2}>{total}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  contentResultado:{
    top:60
  },

  containerBtn:{
    top:30,
    width:'80%',
    height:80,
    alignItems:'center'
  },


})