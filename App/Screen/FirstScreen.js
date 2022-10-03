import React from 'react';
import {
View, 
Text,
StyleSheet,
TouchableOpacity,
Image,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Customimages } from '../constans/Customimages';
import { COLORS, FONTS, horizScale, SIZES, vertScale } from '../constans/theme';
function FirstScreen({ navigation }) {
return (
<View style={styles.container}>
   <View style={{height:vertScale(300),bottom:vertScale(50)}}>
      <Image style={styles.imagefirst}
         source={Customimages.vactorimg}>
      </Image>
   </View>
   <View style={{marginTop:20}}>
      <Text style={{color:COLORS.black,fontWeight:'600',fontSize:SIZES.p1}}>Sell crops and </Text>
      <Text style={{color:COLORS.black,alignSelf:'center',fontWeight:'600',fontSize:SIZES.p1}}>Vegetables</Text>
   </View>
   <View style={{marginTop:20}}>
   <TouchableOpacity onPress={() =>
      navigation.navigate('login')
      } style={styles.button2} >
      <Text style={{ color:COLORS.black,fontSize:SIZES.h5,fontWeight:'600' }}>
      Log In
      </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() =>
      navigation.navigate('signup')
      } style={styles.button1}>
      <Text style={{ color:COLORS.white,fontSize:SIZES.h5,fontWeight:'500' }}>
      Sign Up
      </Text>
   </TouchableOpacity>
   </View>
</View>
)
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor:COLORS.white,
},
imagefirst: {
width: horizScale(200),
height: vertScale(350),
},
button1: {
height:vertScale(44),
backgroundColor: COLORS.Atlantis,
width: horizScale(370),
borderRadius: 7,
elevation: 0.5,
marginTop: vertScale(20),
alignItems: 'center',
justifyContent: 'center'
},
button2: {
height:vertScale(44),
backgroundColor: COLORS.white,
width: horizScale(370),
borderRadius: 7,
elevation: 0.5,
marginTop: vertScale(20),
alignItems: 'center',
justifyContent: 'center',
borderWidth: 1,
borderColor: COLORS.Atlantis,
},
})
export default FirstScreen;