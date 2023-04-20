import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.text}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
    borderWidth:4, 
    borderColor:'black',
    padding:24,
    borderRadius:8,
    margin:24,
    alignItems:'center'
    },
    numberText:{
    color:'black',
    fontSize:36,
    fontWeight:'bold',
    },
})