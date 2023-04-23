import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InstructionText = ({children}) => {
  return (
  <Text style={styles.instructionText}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText:{
        fontSize:24,
        color:'white',
    },
})