import { StyleSheet, Text } from 'react-native';

export const stylesGlobal = StyleSheet.create({

    container:{
        backgroundColor:'#5fb58b',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        fontSize:40,
        fontWeight:'bold',
        color:'#fff',
        bottom:30,
        textAlign:'center'
    },

    textScreem2:{
         fontSize:25,
         color:'#fff',
         textAlign:'center'
    },

    img:{
        width:300,
        height:300,
        borderRadius:30,
    },

    containerTxtImg:{
        top:-50,
        justifyContent:'center',
        alignItems:'center',       
    }
})