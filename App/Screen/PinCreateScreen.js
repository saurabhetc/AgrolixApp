import React,{useState,useRef} from 'react'
import { View ,StyleSheet,TextInput,Text,TouchableOpacity, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, horizScale, SIZES, vertScale } from '../constans/theme';
const OtpScreen = ({navigation}) => {

const [pin1, setPin1] = useState('');
const [pin2, setPin2] = useState('');
const [pin3, setPin3] = useState('');
const [pin4, setPin4] = useState('');

const [pin5, setPin5] = useState('');
const [pin6, setPin6] = useState('');
const [pin7, setPin7] = useState('');
const [pin8, setPin8] = useState('');

const pin1Ref = useRef(null)
const pin2Ref = useRef(null)
const pin3Ref = useRef(null)
const pin4Ref = useRef(null)

const pin5Ref = useRef(null)
const pin6Ref = useRef(null)
const pin7Ref = useRef(null)
const pin8Ref = useRef(null)

const [disable, setDisable] = useState(false);
const [loading, setLoading] = useState();

const Clickbutton = () =>{
   setDisable(true);
   setLoading(true);
   try{
      navigation.navigate('enpn')
   }catch(err){
      setLoading(false);
      console.log(err)
   }   
}
return (
<View style={{flex:1}}>
   <View style={{top:vertScale(30),left:horizScale(30),height:vertScale(50)}}>
      <Text style={{color:COLORS.Atlantis,fontSize:SIZES.p4,fontWeight:'600'}}>Create Your PIN</Text>
   </View>
   <View style={{height:vertScale(170)}}>
   <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:COLORS.black,fontSize:SIZES.h5,marginTop:vertScale(50)}}>
         Enter 4-Digit
      </Text>
   </View>
   <View style={styles.containerspreate}>
      <TextInput 
       ref={pin1Ref}
      onChangeText={(pin1) =>{
         setPin1(pin1);
         if(pin1 != ""){
            pin2Ref.current.focus()
           
         }
      }}
         style={styles.Inputotp}
         keyboardType={'numeric'}
         maxLength={1}
         autoFocus={true}>
      </TextInput>
      <TextInput 
     onChangeText={(pin2) =>{
      setPin1(pin2);
      if(pin2 != ""){
         pin3Ref.current.focus();
      }
   }}
   ref={pin2Ref}
         keyboardType={'numeric'}
         maxLength={1}
         style={styles.Inputotp}>         
      </TextInput>
      <TextInput
       onChangeText={(pin3) =>{
         setPin1(pin3);
         if(pin3 != ""){
            pin4Ref.current.focus();
         }
      }} 
      ref={pin3Ref}
         keyboardType={'numeric'}
         maxLength={1}
         style={styles.Inputotp}>         
      </TextInput>
      <TextInput 
      onChangeText={(pin4) =>{
         setPin1(pin4);
         if(pin4 != ""){
            pin1Ref.current.focus();
         }
      }}
      ref={pin4Ref}
         keyboardType={'numeric'}
         maxLength={1}
         style={styles.Inputotp}>         
      </TextInput>
   </View>
   </View>
   <View style={{height:vertScale(220)}}>
   <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:COLORS.black,fontSize:SIZES.h5,marginTop:vertScale(40)}}>
         Enter 4-Digit
      </Text>
   </View>
   <View style={styles.containerspreate1}>
      <TextInput 
      ref={pin5Ref}
      onChangeText={(pin5) =>{
         setPin1(pin5);
         if(pin5 != ""){
            pin6Ref.current.focus();
         }
      }}
         style={styles.Inputotp1}
         keyboardType={'numeric'}
         maxLength={1}
         autoFocus={true}>
      </TextInput>
      <TextInput 
      onChangeText={(pin6) =>{
         setPin1(pin6);
         if(pin6 != ""){
            pin7Ref.current.focus();
         }
      }}
      ref={pin6Ref}
         keyboardType={'numeric'}
         maxLength={1}
         style={styles.Inputotp}>         
      </TextInput>
      <TextInput 
      onChangeText={(pin7) =>{
         setPin1(pin7);
         if(pin7 != ""){
            pin8Ref.current.focus();
         }
      }} 
      ref={pin7Ref}
         keyboardType={'numeric'}
         maxLength={1}
         style={styles.Inputotp}>         
      </TextInput>
      <TextInput 
      onChangeText={(pin8) =>{
         setPin1(pin8);
         if(pin8 != ""){
            pin5Ref.current.focus();
         }
      }}
      ref={pin8Ref}
         keyboardType={'numeric'}
         maxLength={1}
         style={styles.Inputotp}>         
      </TextInput>
   </View>
   </View>
   
   <TouchableOpacity 
   disabled={disable}
   onPress={() =>
   Clickbutton()
      // navigation.navigate('otpver')
      } style={styles.button1} >
         {!loading ? (
      <Text style={{ color: 'white', fontSize: SIZES.h5,}}> Submit</Text>
         ):(
            <ActivityIndicator size="small" color={COLORS.white} textContent={'Loading...'} visible={loading}/>
         )}
   </TouchableOpacity>
</View>
)
}
export default OtpScreen
const styles = StyleSheet.create({
containerspreate:{
flex:0.4,
justifyContent:'space-evenly',
flexDirection:'row',
marginTop:vertScale(30),
},
Inputotp:{      
backgroundColor:COLORS.floralwhite,
textAlign:'center',
borderColor:COLORS.gray,
color:COLORS.gray,
fontWeight:'600',
alignItems:'center',
fontSize:SIZES.p5,
height:vertScale(55),
width:"15%",
borderRadius:10,
borderWidth:0.5,
},
containerspreate1:{
   flex:0.4,
   justifyContent:'space-evenly',
   flexDirection:'row',
    marginTop:vertScale(30),
   },
   Inputotp1:{      
   backgroundColor:COLORS.floralwhite,
   textAlign:'center',
   borderColor:COLORS.gray,
   color:COLORS.gray,
   fontWeight:'600',
   alignItems:'center',
   fontSize:SIZES.p5,
   height:vertScale(55),
   width:"15%",
   borderRadius:10,
   borderWidth:0.5,
   },

button1: {
padding:vertScale(10),
backgroundColor: COLORS.Atlantis,
width: horizScale(370),
alignItems: 'center',
borderRadius: 10,
elevation: 2 ,
justifyContent: 'center',
alignSelf: 'center',
top:vertScale(30)
},
})