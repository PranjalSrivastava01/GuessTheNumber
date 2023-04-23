
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Alert } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import GameScreen from './GameScreen'
import Title from '../components/Title'
import Card from '../components/Card'
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
            'Please enter valid input',
            [{text:'okay',style:'destructive',onPress: setEnteredNumber},]
        )
     return;
    }
    onPickNumber(choserNumber);
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess my number</Title>
        <Card>
            <Text style={styles.instructionText}>Enter a number</Text>
            <TextInput style={styles.numberInput}
              maxLength={3}
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
        </Card>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        margingTop:100,
        alignItems:'center'
    },
    instructionText:{
        fontSize:24,
        color:'white',
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
