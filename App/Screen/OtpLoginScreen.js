import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
 import auth from '@react-native-firebase/auth';
import { COLORS, horizScale, SIZES, vertScale } from '../constans/theme';
// import { Customimages } from '../constans/Customimages';

const OtpLoginScreen = ({navigation,props}) => {
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);
  const[ ConfirmData, setConfirmData] = useState();
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState();
  const [counter,setCounter] = useState(59);

  useEffect(() =>{
   const timer= counter>0 && setInterval(() =>
   setCounter(counter - 1),1000);
   return () => clearInterval(timer);
  },[counter])

  const Clickbutton = async() => {
   //  setDisable(true);
    setLoading(true);
    try {
       navigation.navigate('enpn');
      const response = await ConfirmData.confirm(pin1,pin2,pin3,pin4,pin5,pin6);
      console.log(response);
      alert("your number is verified")

    } catch (err) {
      setLoading(false);
      console.log("invalid code");
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{top: vertScale(30), left: horizScale(30), flex: 0.4, position: 'absolute'}}>
        <Text style={{color:COLORS.Atlantis, fontSize: SIZES.p4, fontWeight: '600'}}>
          Verification
        </Text>
        <Text style={{color:COLORS.black, fontSize: SIZES.p5, fontWeight: '600'}}>
          We have sent you an OTP code
        </Text>
        <Text style={{color: COLORS.black, fontSize: SIZES.h5}}>
          On Numer +91 '4567457542'
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.Inputotp}
          keyboardType={'numeric'}
          maxLength={1}
          ref={pin1Ref}
          onChangeText={pin1 => {
            setPin1(pin1);
            if (pin1 != '') {
              pin2Ref.current.focus();
            }
          }}
          autoFocus={true}></TextInput>
        <TextInput
          ref={pin2Ref}
          onChangeText={pin2 => {
            setPin2(pin2);
            if (pin2 != '') {
              pin3Ref.current.focus();
            }
          }}
          keyboardType={'numeric'}
          maxLength={1}
          style={styles.Inputotp}></TextInput>
        <TextInput
          ref={pin3Ref}
          onChangeText={pin3 => {
            setPin3(pin3);
            if (pin3 != '') {
              pin4Ref.current.focus();
            }
          }}
          keyboardType={'numeric'}
          maxLength={1}
          style={styles.Inputotp}></TextInput>
        <TextInput
          ref={pin4Ref}
          onChangeText={pin4 => {
            setPin4(pin4);
            if (pin4 != '') {
              pin5Ref.current.focus();
            }
          }}
          keyboardType={'numeric'}
          maxLength={1}
          style={styles.Inputotp}></TextInput>
        <TextInput
          ref={pin5Ref}
          onChangeText={pin5 => {
            setPin5(pin5);
            if (pin5 != '') {
              pin6Ref.current.focus();
            }
          }}
          keyboardType={'numeric'}
          maxLength={1}
          style={styles.Inputotp}></TextInput>
        <TextInput
          ref={pin6Ref}
          onChangeText={pin6 => {
            setPin6(pin6);
            if (pin6 != '') {
              pin1Ref.current.focus();
            }
          }}
          keyboardType={'numeric'}
          maxLength={1}
          style={styles.Inputotp}></TextInput>
      </View>
      <View style={{flex: 0.1, position: 'absolute', marginTop: vertScale(330),flexDirection:'row'}}>
        <TouchableOpacity>
        <Text style={{color: COLORS.blue, left: horizScale(30), fontSize: SIZES.h4,fontWeight:'500'}}>Resend Code:</Text>
        </TouchableOpacity>
        <Text style={{color: COLORS.red, left: horizScale(30), fontSize: SIZES.h4,fontWeight:'500',marginLeft:5}}>{counter}</Text>
      </View>
      <TouchableOpacity
        disabled={disable}
        onPress={() => Clickbutton()}
        style={styles.button1}>
        {!loading ? (
          <Text style={{color: COLORS.white, fontSize: SIZES.h5}}> Next </Text>
        ) : (
          <ActivityIndicator
            size="small"
            color={COLORS.white}
            textContent={'Loading...'}
            visible={loading}
          />
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default OtpLoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: vertScale(260),
  },
  Inputotp: {
    backgroundColor: COLORS.floralwhite,
    textAlign: 'center',
    borderColor: COLORS.gray,
    color: COLORS.gray,
    fontWeight: '600',
    alignItems: 'center',
    fontSize: SIZES.p5,
    height: vertScale(45),
    width: '12%',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  button1: {
    flex: 0.1,
    padding: vertScale(10),
    backgroundColor: COLORS.Atlantis,
    width:horizScale(370),
    alignItems: 'center',
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'center',
    marginTop: vertScale(460),
    alignSelf: 'center',
    position: 'absolute',
  },
});
