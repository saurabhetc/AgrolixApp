import { NavigationContainer } from '@react-navigation/native';
import React, { useState,useEffect, useRef } from 'react';
import {
View, TextInput, Text,
ScrollView,
StyleSheet,
Image,
TouchableOpacity,
Alert,
ActivityIndicator,
} from "react-native";
// import CheckBox from 'react-native-check-box';
import { SafeAreaView } from 'react-native-safe-area-context';
import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import  AsyncStorage from '@react-native-async-storage/async-storage';
import { Customimages } from '../constans/Customimages';
import { COLORS, horizScale, SIZES, vertScale } from '../constans/theme';
function SignupScreen({ navigation }) {
const [firstname, setFirstName] = useState();
const [lastname, setLastName] = useState();
const [mobile, setMobile] = useState();
const [state, setState] = useState();
const [city, setCity] = useState();
const [tehsil, setTehsil] = useState();
const [village, setVillage] = useState();
const [address, setAddress] = useState();
const [toggleCheckBox, setToggleCheckBox] = useState(false);
const [ confirmdata,setConfirmData] = useState();
const [loading,setLoading] = useState();
const [disable,setDisable] = useState(false);


useEffect(() =>{
   getDatabase();
},[]);


const getDatabase = async()=>{
   try{
      const data = await firestore()
      .collection('agrolix')
      .doc('OQZLSJKI83qmZY2EW0Qw')
      .get(); 
      console.log(data._data);
   } catch(err){
      console.log(err)
   }
}


const  handleLogin = async() => {
   setLoading(true);
   setDisable(true);
   try{
      const response = await auth().signInWithPhoneNumber( '+91'+mobile);
            navigation.navigate('otp')
            ,{mobile:response.mobile}
             setConfirmData(response)
             console.log(response);
             //cache memory data store in mobile
             await AsyncStorage.setItem('ItemList',phone);
             setPhone('');
            //  alert('Data is added');

   }catch(err){
      console.log(err)
      alert('Not matched, the number was ')
      setLoading(false);
   }
   firebase.database().ref("users1/" + 123456789).set(
      {
         firstname:firstname,
         lastname:lastname,
         mobile:mobile,
         state:state,
         city:city,
         tehsil:tehsil,
         village:village,
         address:address
      }
   )
    };



return (
<SafeAreaView style={styles.container}>
   <ScrollView>
   <View>
    <TouchableOpacity onPress={() => {
    navigation.goBack()}}>
       <Image style={styles.backImage}
        source={require('../asset/images/back.png')} />
     </TouchableOpacity>
       </View>
      <View>
         <Text style={styles.textcna}>Sign Up</Text>
         <Text style={styles.textwcb}>Welcome Back!</Text>
      </View>
      <View style={{marginTop:vertScale(20)}}>
      <Text style={styles.inputtextFLE}>
         First Name
         </Text>
         <TextInput 
            autoFocus={false}
            onBlur={() =>{setFirstName(false);}}
            onChangeText={(value) => {setFirstName(value)}}
            placeholder='Enter your First Name'
            placeholderTextColor={COLORS.silver}
            maxLength={15}
            value={firstname}
            style={styles.input}
            >
         </TextInput> 
      <Text style={styles.inputtextFLE}>
         Last Name
         </Text>
         <TextInput 
            autoFocus={false}
            onBlur={() =>{setLastName(false);}}
            onChangeText={(value) => {setLastName(value)}}
            placeholder='Enter your Last Name'
            placeholderTextColor={COLORS.silver}
            maxLength={15}
            value={lastname}
            style={styles.input}
            >
         </TextInput>  
      <Text style={styles.inputtextFLE}>
         Enter Your Number
         </Text>
        <View style={{flex: 2, color: 'black',bottom:vertScale(20)}}>
          <Image
            source={Customimages.flag}
            style={styles.flagImage}
          />
          <Text style={styles.linetext}></Text>
          <Image
            source={Customimages.downarrow}
            style={styles.dropdownimagetext}/>  
           <TextInput
            style={styles.TextInput}
            placeholder="123456789"
            placeholderTextColor={COLORS.silver}
            maxLength={10}
            value={mobile}
            onChangeText={value => setMobile(value)}/>
         </View>

         <View style={{bottom:vertScale(15)}}>
         <Text style={styles.Itemtext}>
            State
            </Text>
          <Image
            source={Customimages.downarrow1}
            style={styles.dropdownImage}/>  
           <TextInput
            style={styles.TextInput1}
            placeholder='Enter your State'
            placeholderTextColor={COLORS.silver}
            maxLength={12}/>
         </View>
         <View style={{bottom:vertScale(10)}}>
         <Text style={styles.Itemtext}>City</Text>
          <Image
            source={Customimages.downarrow1}
            style={styles.dropdownImage}/>  
           <TextInput
            style={styles.TextInput1}
            placeholder='Enter your City'
            placeholderTextColor={COLORS.silver}
            maxLength={12}/>
         </View>
         <View style={{bottom:vertScale(10)}}>
         <Text style={styles.Itemtext}>Tehsil</Text>
          <Image
            source={Customimages.downarrow1}
            style={styles.dropdownImage}/>  
           <TextInput
            style={styles.TextInput1}
            placeholder='Enter your Tehsil'
            placeholderTextColor={COLORS.silver}
            maxLength={12}/>
         </View>
         <View style={{bottom:10}}>
         <Text style={styles.Itemtext}>Village</Text>
          <Image
            source={Customimages.downarrow1}
            style={styles.dropdownImage}/>  
           <TextInput
            style={styles.TextInput1}
            placeholder='Enter your Village'
            placeholderTextColor={COLORS.silver}
            maxLength={12}/>
         </View>
         <View style={{bottom:10}}>
         <Text style={styles.Itemtext}>
            Address
            </Text>
          <Image
            source={Customimages.downarrow1}
            style={styles.dropdownImage}/>  
           <TextInput
            style={styles.TextInput1}
            placeholder='Enter your Address'
            placeholderTextColor={COLORS.silver}
            maxLength={12}/>
         </View>    
      </View>
{/* Start to the checkbox section */}
      <View style={{flexDirection:'row',flex:1,top:vertScale(15)}}>
         <View style={{flex:0.1}}>
       <TouchableOpacity style={styles.checkBox}
       >
       </TouchableOpacity>
         </View>
         <View style={{flex:0.45,}}>
            <Text style={{fontSize:SIZES.p3,color:COLORS.black,fontWeight:'500',left:horizScale(8)}}>
               By continuing you agree to
               </Text>
         </View>
         <View style={{flex:0.45,}}>
            <Text style={{color:COLORS.Atlantis,fontSize:SIZES.p2}}>Terms of Service & Privacy</Text>
         </View>
      </View>
{/* End to the checkbox section */}

      <TouchableOpacity 
      disabled={disable}
      onPress={() =>
          //handleLogin()
           navigation.navigate('otp')
         } style={styles.button1} >
            {!loading ?(
         <Text style={{ color: COLORS.white, fontSize: SIZES.h5, }}>Submit</Text>
            ):(
               <ActivityIndicator size="small" color={COLORS.white} textContent={'Loading...'} visible={loading} />
            )}
      </TouchableOpacity>   
         <TouchableOpacity onPress={() =>
            navigation.navigate('first')
            } style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:vertScale(20)}}>
               <View style={{flex:0.7}}>
               <Text style={{
            fontSize:SIZES.p3, 
            color: 'black', 
            marginLeft:95
            }}>
            Already have an account?
            </Text>
               </View>
               <View style={{flex:0.3}}>
               <Text style={{
                  fontSize: SIZES.h4,
                  fontWeight:'600',
                  color:COLORS.Atlantis, 
                  right:horizScale(10)
                  }}>Log in</Text> 
               </View>       
         </TouchableOpacity>
         <Text style={{height:25}}></Text>
   </ScrollView>
</SafeAreaView>
)
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
},
backImage:{ 
   width:horizScale(20), 
   height:vertScale(20), 
   marginTop:vertScale(15), 
   marginLeft: horizScale(10) 
},
dropdownimagetext:{
   width: horizScale(20), 
   height: vertScale(20), 
   left: horizScale(65),
   top:vertScale(30),
   alignContent:'center'
},
inputtextFLE:{
   fontSize:SIZES.h3,
   fontWeight:'400',
   color:COLORS.silver,
   marginLeft:horizScale(20),
   marginTop:vertScale(10)
},
Itemtext:{
   fontSize:SIZES.h3,
   fontWeight:'400',
   color:COLORS.silver,
   marginLeft:horizScale(20),
   top:vertScale(10)
},
flagImage:{
   width: horizScale(25),
   height: vertScale(25),
   left: horizScale(30),
   position: 'absolute',
  top:vertScale(45)
 },
 linetext:{
   width:horizScale(1),
   height:vertScale(17),
   backgroundColor:COLORS.silver,
   left:horizScale(95),
   top:vertScale(50)
},
input: {
width: horizScale(370),
height: vertScale(48),
color: COLORS.black,
borderRadius: 7,
marginTop:vertScale(10),
fontSize: SIZES.h4,
paddingLeft: horizScale(12),
alignSelf: 'center',
backgroundColor: 'white',
borderColor:COLORS.green,
borderWidth:1,

},
TextInput: {
   height: vertScale(48),
   width:horizScale(370),
   marginLeft: horizScale(20),
   color: COLORS.black,
   fontSize: SIZES.h4,
   borderColor:COLORS.green,
   borderWidth:1,
   borderRadius: 7,
   paddingLeft:horizScale(80),
 },
 TextInput1: {
   height: vertScale(48),
   width:horizScale(370),
   marginLeft: horizScale(20),
   color: COLORS.black,
   fontSize: SIZES.h4,
   borderColor:COLORS.green,
   borderWidth:1,
   borderRadius: 7,
   padding:vertScale(12)
 },
 dropdownImage:{
   width: horizScale(20),
    height: vertScale(20), 
   left: horizScale(350),
   top:vertScale(33),
   alignContent:'center'},
textcna: {
fontSize:SIZES.p4,
marginLeft: horizScale(20),
marginTop: vertScale(10),
color:COLORS.Atlantis,
fontWeight: 'bold'
},
textwcb: {
   fontSize:SIZES.p4,
   marginLeft: horizScale(20),
   marginTop: vertScale(10),
   color: COLORS.black,
   fontWeight: '500'
   },
button1: {
padding:vertScale(10),
backgroundColor: COLORS.Atlantis,
width: horizScale(370),
alignItems: 'center',
borderRadius: 10,
elevation: 2 ,
justifyContent: 'center',
marginTop: vertScale(40),
alignSelf: 'center',
},
checkBox:{
   width:20,
   height:20,
   borderWidth:2,
   borderColor:'green',
   marginRight:15,
   left:20
},
})
export default SignupScreen;



