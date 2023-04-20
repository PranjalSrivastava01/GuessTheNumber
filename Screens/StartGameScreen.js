import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
             maxLength={2}
              keyboardType='numeric'
              >
            </TextInput>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton>confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginHorizontal:20,
        marginTop:100,
        backgroundColor:'#4e0329',
        borderRadius:8,
        elevation:20,//android only property
        shadowColor:'black',
        shadowOpacity:0,
    },
    buttonsContainer:{
   flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
         },
  numberInput:{
width:50,
  height:60,
  fontSize:32,
  borderBottomColor:'#ddb52f',
  borderBottomWidth:2,
  color:'#ddb52f',
  marginVertical:8,
  fontWeight:'bold',
  textAlign:'center',
    },
})
