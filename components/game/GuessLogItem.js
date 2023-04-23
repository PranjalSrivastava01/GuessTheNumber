 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 
 const GuessLogItem = ({roundNumber,guess}) => {
   return (
     <View style={styles.listItem}>
       <Text>{roundNumber}</Text>
       <Text>Opponents's Guess:{guess}</Text>
     </View>
   );
 }
 
 export default GuessLogItem
 
 const styles = StyleSheet.create({
    listItem:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-between',
        widht:"100%",
        // elevation:4,
        // shadowColor:'balck',
        // shadowOffset:{width:0,height:0},
        // shadowOpacity:0.25,
        // shadowRadius:3,
    },
 })