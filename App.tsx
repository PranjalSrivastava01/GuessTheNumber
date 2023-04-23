import { useReducer, useState } from 'react'
import { StyleSheet, Text, View ,ImageBackground,SafeAreaView} from 'react-native'
import React from 'react'
import StartGameScreen from './Screens/StartGameScreen'
import GameScreen from './Screens/GameScreen'
import GameOver from './Screens/GameOver'
const App = () => {
  const [userNumber,setNumber]=useState();
  const [gameIsOver,setGameIsOver]=useState(false);
  const [guessRounds,setGuessRounds]=useState(0);
  function pickedNumberHandler(pickedNumber){
    setNumber(pickedNumber);
  }
  function gameIsOverHandler(numberOfRounds)
  {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  let minBoundary=1;
  let maxBoundary=100;
  function StartNewGameScreen()
  {
    setGameIsOver(false)
    pickedNumberHandler(0);
     minBoundary=1;
     maxBoundary=100;
  }
  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}></StartGameScreen>;
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} gameIsOverHandler={gameIsOverHandler} minBoundary={minBoundary} maxBoundary={maxBoundary}></GameScreen>
  }
  if(gameIsOver)
  {
    screen=<GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={StartNewGameScreen} ></GameOver>
  }
  return (
    
      <ImageBackground style={styles.rootStyle} source={require('../AwesomePro/assets/images/bg.png')}     resizeMode='cover'> 
      <SafeAreaView style={styles.rootStyle}>
      {screen}
      </SafeAreaView>
     
      </ImageBackground>

  )
}

export default App

const styles = StyleSheet.create({
rootStyle:{
  flex:1,
}

})