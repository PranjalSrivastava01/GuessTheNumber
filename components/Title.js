import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
      fontSize:18,
      borderColor:'black',
      fontWeight:'bold',
      color:'black',
      padding:12,
      }
})