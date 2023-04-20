import { useReducer, useState } from 'react'
import { StyleSheet, Text, View ,ImageBackground,SafeAreaView} from 'react-native'
import React from 'react'
import StartGameScreen from './Screens/StartGameScreen'
import GameScreen from './Screens/GameScreen'
const App = () => {
  const [useNumber,setNumber]=useState();
  function pickedNumberHandler(pickedNumber){
    setNumber(pickedNumber);
  }
  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}></StartGameScreen>;
  if(useNumber){
    screen=<GameScreen useNumber={useNumber}></GameScreen>
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