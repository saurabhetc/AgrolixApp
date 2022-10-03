import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Customimages } from '../../constans/Customimages'
import appTheme, { horizScale, vertScale } from '../../constans/theme';

const FleshScreen = ({navigation}) => {

  const [align ,setAlign] = useState(false);
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('auth')
    }, 3000);
}, []);
  return (
    <View style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
     <Image style={styles.imagesflash} source={Customimages.flash} />
      </View>
      <View>
        <Image 
         source={Customimages.grassbottom}
         style={styles.grassbottomimage}/>
      </View>
    </View>
  )
}

export default FleshScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:appTheme.COLORS.white

  },
  imagesflash:{
    width:horizScale(250),
    height:vertScale(300),
    marginTop:horizScale(220)
  },
  grassbottomimage:{
    width:horizScale(415),
    height:vertScale(100),
    marginTop:horizScale(170),
    alignSelf:'center',
    alignContent:'center'
  },
  
})