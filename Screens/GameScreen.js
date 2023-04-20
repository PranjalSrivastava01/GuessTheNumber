import { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Title from '../components/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary=1;
let maxBoundary=100;

const GameScreen = (props) => {
  const initialGuess=generateRandomBetween(1,100,props.userNumber);
  const [currentGuess,setCurrentGuess]=useState(initialGuess);
  function nextGuessHandler(direction){
    if(direction=='lower')
    {
      maxBoundary=currentGuess;
          }
    else
    {
      minBoundary=currentGuess+1;
    }
    const newRndNumber=generateRandomBetween(minBoundary,maxBoundary,currentGuess)
    setCurrentGuess(newRndNumber)
  } 
  
  return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer text={currentGuess}></NumberContainer>
        <View>
        <Text>Higher or lower?</Text>
        <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>+</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
        </View>
      </View>
      <View></View>
    </View>
    
  )
}

export default GameScreen

const styles = StyleSheet.create({
screen:{
  flex:1,
  padding:40
},

})