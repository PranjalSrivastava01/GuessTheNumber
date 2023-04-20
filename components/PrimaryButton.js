import {View,Text,Pressable,StyleSheet} from 'react-native';
function PrimaryButton({children,onPress}){
    // function pressHnadler()
    // {
    //     console.log("maar daala re")
    // }
 return  (
<View style={styles.buttonOuter}>
    <Pressable style={styles.container} onPress={onPress} android_ripple={{color:'#FFECF5'}}>
    <Text style={styles.buttonText}>
        {children}
    </Text>
    </Pressable>
</View>
 );
} 
const styles=StyleSheet.create({
    buttonOuter:{
        borderRadius:28, 
        margin:4,
        overflow:'hidden',
    },
container:{
backgroundColor:"white",

paddingVertical:8,
paddingHorizontal:16,

elevation:2,
},
buttonText:{
    color:"#72063c",
    textAlign:'center',

}
});
export default PrimaryButton