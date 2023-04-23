import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({

    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginHorizontal:20,
        marginTop:80,
        backgroundColor:'#4e0329',
        borderRadius:8,
        elevation:20,//android only property
        shadowColor:'black',
        shadowOpacity:0,
    },
})