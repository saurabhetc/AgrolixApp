import React,{useState} from 'react'
import { StyleSheet, Text, View,Pressable,Button, TouchableOpacity } from 'react-native'
import { COLORS, horizScale, SIZES, vertScale } from '../../constans/theme';

const AuthScreen = ({navigation}) => {
  
  const [currentLanguage,setLanguage] =useState(false);

  const SelectLanguage = () =>{
try{
setLanguage(true);
navigation.navigate('first');
}catch(err){
  console.log(err)
}
  } 
  return (

    <View style={styles.container}>

      <View>
        <Text style={{color:COLORS.Atlantis,fontSize:SIZES.padding,bottom:vertScale(60),fontWeight:'400'}}>
          Select Your Language
          </Text>
      </View>
      <View style={{marginTop:vertScale(50)}}>
      <Pressable
         onPress={() => {
          setLanguage('hi')
      }}
          style={{
            backgroundColor:
              currentLanguage === 'hi' ? COLORS.Atlantis : COLORS.white,
            height:48,
            width:'95%',
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:0.5,
            borderColor:currentLanguage === 'en' ? COLORS.green  : COLORS.Atlantis,
          }}>
          <Text style={{
            color: currentLanguage === 'hi' ? COLORS.white : COLORS.black,
          fontSize:18,
          fontWeight:'400'}}>{'हिन्दी'}</Text>
        </Pressable>
        <Pressable
         onPress={() => {
          setLanguage('en')
      }}
          style={{
            backgroundColor:
              currentLanguage === 'en' ? COLORS.Atlantis : COLORS.white,
            height:48,
            width:'95%',
            marginTop:20,
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center',
            borderWidth:0.5,
            borderColor:currentLanguage === 'hi' ? COLORS.green  : COLORS.Atlantis,
          }}>
          <Text style={{fontSize:18,
            fontWeight:'400',
            color: currentLanguage === 'en' ? COLORS.white : COLORS.black,
            }}>English</Text>
        </Pressable>
        </View>

        <TouchableOpacity
          onPress={() => {
            SelectLanguage()
          }}
          style={{
            backgroundColor:COLORS.Atlantis,
            height:vertScale(48),
            width:'95%',
            marginTop:vertScale(350),
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center'
          }}>
          <Text style={{fontSize:SIZES.h5,fontWeight:'400',color:COLORS.white}}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:vertScale(120),
    marginLeft:horizScale(20)
},

})