import { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Alert,FlatList} from 'react-native'
import React from 'react'
import Title from '../components/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import Icon from 'react-native-vector-icons/FontAwesome'
import GuessLogItem from '../components/game/GuessLogItem';
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
  const [guessRounds,setGuessRounds]=useState([initialGuess])
  useEffect(()=>{
    if(currentGuess===props.userNumber)
    {
      props.gameIsOverHandler(guessRounds.length);
      
    }
  },[currentGuess,props.gameIsOverHandler,props.userNumber]);
  useEffect(()=>{
  minBoundary=1;
  maxBoundary=100;
  },[])
  function nextGuessHandler(direction){
    if((props.userNumber>currentGuess && direction=='lower')||(props.userNumber<currentGuess && direction=='higher'))
    {
      Alert.alert(
        'Invalid input',
        'You might be lying :)',
        [{text:'okay',style:'destructive'}]
    )
      return;
    }
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
    setGuessRounds(prevGuessRounds=>[newRndNumber,...prevGuessRounds]);
  } 
  const guessRoundListLength=guessRounds.length;
  return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer text={currentGuess}></NumberContainer>
        <View>
        <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonStyle}>
          <View style={{flex:1}}>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}><Icon name="plus"></Icon></PrimaryButton>

          </View>
          <View style={{flex:1}}>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}><Icon name="minus"/></PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRounds=><Text key={guessRounds}>{guessRounds}</Text>)} */}
      <FlatList showsVerticalScrollIndicator={false} keyExtractor={(item)=>item.id} 
      data={guessRounds} renderItem={(itemData)=>
          <GuessLogItem roundNumber={guessRoundListLength-itemData.index} guess={itemData.item}></GuessLogItem>}>
      </FlatList>
      </View>
     </View>
    </View>
    
  )
}

export default GameScreen

const styles = StyleSheet.create({
screen:{
  flex:1,
  padding:20
},
buttonStyle:{
  margin:20,
  flexDirection:'row'
},
listContainer:{
 height:300,
 width:300,
  padding:16
}
})