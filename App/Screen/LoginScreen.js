import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Alert,
  ActivityIndicator
} from 'react-native';
import {Customimages} from '../constans/Customimages';
import auth from '@react-native-firebase/auth';
import  AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, horizScale, SIZES, vertScale } from '../constans/theme';

const LoginScreen = ({navigation,props}) => {

 const[phone, setPhone] = useState(null);
 const [loading,setLoading] = useState(false)
const[ Confirm, setConfirm] = useState();

  const handleLogin = async () => {
    setLoading(true)
    try {
        const response = await auth().signInWithPhoneNumber( '+91'+phone);
       navigation.navigate('otpls',{xyz:response})
       ,{phone:response.phone}
      setConfirm(response)
      console.log(response);
       //cache memory data store in mobile
      await AsyncStorage.setItem('ItemList',phone); 
      setPhone('');
      setLoading(false)
    } 
    catch (err) {
       alert('Not matched, the number was ')
       setLoading(false)
       console.log(err)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <View style={{flex: 2, color: COLORS.black}}>
          <Image
            source={Customimages.flag}
            style={{
              width: horizScale(25),
              height: vertScale(25),
              left: horizScale(5),
              position: 'absolute',
               bottom: horizScale(-5),
            }}
          />
          <Image
            source={Customimages.downarrow}
            style={{width:horizScale(20), height:vertScale(20), left: horizScale(35)}}
          />
        </View>
        <View style={{width: horizScale(30), color: COLORS.black}}>
          <Text style={{color:COLORS.black, fontSize: SIZES.h3, fontWeight: '600'}}>
            +91
          </Text>
        </View>
        <View style={{flex: 6}}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone Number"
            placeholderTextColor={'black'}
            maxLength={10}
            value={phone}
            onChangeText={value => setPhone(value)}/>
        </View>
      </View>
      <TouchableOpacity
      disabled={loading}
        style={styles.loginBtn}
        onPress={() =>
              //navigation.navigate('otpls')
           handleLogin()
        // setLoading(true)
        }>
          {!loading ? (
        <Text style={styles.loginText}>Submit</Text>
          ):(
            <ActivityIndicator size="large" color={COLORS.white} textContent={'Loading...'} visible={loading}/>
          )}
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 7,
    width: '80%',
    height:vertScale(50),
    marginBottom: vertScale(20),
    alignItems: 'center',
    elevation: 4,
  },

  TextInput: {
    height: vertScale(50),
    flex: 1,
    padding: vertScale(10),
    marginLeft: horizScale(10),
    color: COLORS.black,
    fontSize: SIZES.h3,
    fontWeight: '600',
  },
  loginBtn: {
    width: '90%',
    borderRadius: 7,
    height: vertScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vertScale(40),
    backgroundColor: COLORS.Atlantis,
  },

  loginText: {
    fontSize: SIZES.h5,
    fontWeight: '600',
  },
});

