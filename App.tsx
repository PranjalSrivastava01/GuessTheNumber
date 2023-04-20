import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import React from 'react'
import StartGameScreen from './Screens/StartGameScreen'
const App = () => {
  return (
  
      <ImageBackground style={styles.rootStyle} source={require('../AwesomePro/assets/images/bg.png')}     resizeMode='cover'> 
      <StartGameScreen></StartGameScreen>
          </ImageBackground>

  )
}

export default App

const styles = StyleSheet.create({
rootStyle:{
  flex:1,
}

})