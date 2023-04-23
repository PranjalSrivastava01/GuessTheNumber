import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Title from '../components/Title'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import PrimaryButton from '../components/PrimaryButton'
const GameOver = (props) => {
  return (
    <View style={styles.outerContainer}>
      <Title>GameOver</Title>
      <View>
      <Image style={styles.imageStyle} source={require('../components/Celebrate.jpg')}></Image>
 </View>
 <View>
  <Text style={{textAlign:'center',fontSize:15,marginVertical:10}}>
    Your phone needed <Text style={{fontWeight:'bold'}}>{props.roundsNumber}</Text> rounds to guess the number <Text style={{fontWeight:'bold'}}>{props.userNumber}</Text>
  </Text>
  <PrimaryButton onPress={props.onStartNewGame}>Restart</PrimaryButton>
 </View>
        </View>
  )
}

export default GameOver

const styles = StyleSheet.create({
outerContainer:{
alignItems:'center',
flex:1,
margin:100,

},
imageStyle:{
  height:300,
  width:300,
  borderRadius:200,
  borderColor:"black",
  margin:36,
}
})