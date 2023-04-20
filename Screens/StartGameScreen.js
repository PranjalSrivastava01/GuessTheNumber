
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Alert } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import GameScreen from './GameScreen'
const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber,setEnteredNumber]=useState('');

    function numberInputHandler(text){
        setEnteredNumber(text)
    }
    function resetInputHandler()
    {
        setEnteredNumber('');
    }
    function confirmInputHandler(){
    const choserNumber=parseInt(enteredNumber);
    if(isNaN(choserNumber) || choserNumber<=0 ){
        Alert.alert(
            'Invalid input',
            'NUMBER SAHI SE INPUT KAR LAUDE',
            [{text:'okay',style:'destructive',onPress: setEnteredNumber},]
        )
     return;
    }
    onPickNumber(choserNumber);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
              maxLength={2}
              keyboardType='numeric'
              onChangeText={numberInputHandler}
              value={enteredNumber}
              >
            </TextInput>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>confirm</PrimaryButton>
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
