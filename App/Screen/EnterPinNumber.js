import React,{useState,useRef,useEffect, } from 'react'
import { View ,StyleSheet,TextInput,Text,TouchableOpacity, Modal,Image, ActivityIndicator, Animated} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Customimages } from '../constans/Customimages';
import { COLORS, horizScale, SIZES, vertScale } from '../constans/theme';
const EnterPinNumber = ({navigation}) => {
const [pin1, setPin1] = useState('');
const [pin2, setPin2] = useState('');
const [pin3, setPin3] = useState('');
const [pin4, setPin4] = useState('');

const pin1Ref = useRef(null)
const pin2Ref = useRef(null)
const pin3Ref = useRef(null)
const pin4Ref = useRef(null)
  const[showModal, setShowModal] = useState(false);
  const[submit, setSubmit] = useState(false);
const [loading,setLoading] = useState();
const [disable,setDisable] = useState(false);



const Clickbutton = () =>{
    setDisable(true);
    setLoading(true)

   if(pin1,pin2,pin3,pin4>4){
   setSubmit(!submit);
   }else{
   setShowModal(true);
   }
  }
return (
<View style={{flex:1}}>
   <View style={{height:vertScale(170)}}>
   <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:COLORS.black,fontSize:SIZES.h5,marginTop:vertScale(50),fontWeight:'600'}}>
      Enter Your PIN
      </Text>
   </View>

   <View style={styles.containerspreate}>
      <TextInput 
      ref={pin1Ref}
      onChangeText={(pin1) =>{
         setPin1(pin1);
         if(pin1 != ""){
            pin2Ref.current.focus();
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

   <Modal 
   transparent visible={showModal}
   onRequestClose={() => setShowModal(false)} 
   animationType='fade'
   hardwareAccelerated
   >
<View style={styles.modalBackGround}>
   <View style={styles.modalContainer}>
      <View style={{marginTop:vertScale(70)}}>
      <Image 
      source={Customimages.lightimg} 
      style={{height:vertScale(80),width:horizScale(92),borderRadius:10,alignSelf:'center'}} />
      </View>
      <View style={{justifyContent:'center',alignItems:'center',top:vertScale(20)}}>
         <Text style={{color:COLORS.Atlantis,fontWeight:'600',fontSize:SIZES.h1}}>Congratulations</Text>
         <Text style={{color:COLORS.black,fontWeight:'400',fontSize:SIZES.p5,top:vertScale(10)}}>
            Your account is ready to use</Text>
      </View>
      <TouchableOpacity 
      onPress={() =>navigation.navigate('tab')}
      android_ripple={{color:COLORS.white}} 
      style={{justifyContent:'center',alignItems:'center',marginTop:vertScale(50)}}>
         <Text style={{color:'red',fontSize:SIZES.h1,fontWeight:'500',color:COLORS.white,
         backgroundColor:COLORS.black,width:horizScale(100),padding:horizScale(5),borderRadius:4,paddingLeft:horizScale(25)}}>
            OK
            </Text>
      </TouchableOpacity>
   </View>
</View>
</Modal>
  <View style={{top:vertScale(100)}}>
  <TouchableOpacity 
   disabled={disable}
  onPress={() =>
      //  navigation.navigate('tab')
   Clickbutton()
      } 
      style={styles.button1}>
         {!loading ? (
      <Text style={{ color: COLORS.white, fontSize:SIZES.h5,}}>Submit</Text>
         ):(
            <ActivityIndicator size="small" color={COLORS.white} textContent={'Loading...'} visible={loading} />
         )}
   </TouchableOpacity>
  </View>
  <View style={{top:150,justifyContent:'center',alignItems:'center'}}>
  <TouchableOpacity 
  onPress={() =>
       navigation.navigate('pins')
      } 
      style={styles.Resetpassword} >
      <Text style={{ color: COLORS.blue, fontSize:SIZES.h5,fontWeight:'700'}}>
      Reset Pin
      </Text>
   </TouchableOpacity>
  </View>
</View>
)
}
export default EnterPinNumber
const styles = StyleSheet.create({
containerspreate:{
flex:0.4,
justifyContent:'space-evenly',
flexDirection:'row',
marginTop:vertScale(130),
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
    Resetpassword:{

    },

    modalContainer:{
      width:'100%',
      backgroundColor:COLORS.white,
      height:vertScale(340),
      borderRadius:10,
      elevation:20,
      marginTop:vertScale(390)
    },
    modalBackGround:{
      flex:1,
      backgroundColor:'rgba(0,0,0,0.5)',
      justifyContent:'center',
      alignItems:'center'
    }
})