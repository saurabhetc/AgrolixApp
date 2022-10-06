  
  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './App/Navigation/StackNavigation/AuthScreen';
import FirstScreen from './App/Screen/FirstScreen';
import FleshScreen from './App/Navigation/StackNavigation/FleshScreen';
import LoginScreen from './App/Screen/LoginScreen';
import SignupScreen from './App/Screen/SignupScreen';
import OtpScreen from './App/Screen/OtpScreen';
import PinCreateScreen from './App/Screen/PinCreateScreen';
import TabScreen from './App/Navigation/TabNavigation/TabScreen';
import DetailedScreen from './App/Screen/DetailedScreen';
import OtpLoginScreen from './App/Screen/OtpLoginScreen';
import EnterPinNumber from './App/Screen/EnterPinNumber';
import HomeScreenHindi from './App/Screen/HomeScreenHindi';

 const Stack = createNativeStackNavigator();
 
 const App =() => {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName='splash'>   
      <Stack.Screen name="splash" component={FleshScreen} options={{headerShown:false}}/>
      <Stack.Screen name="auth" component={AuthScreen} options={{headerShown:false}}/>
      <Stack.Screen name="first" component={FirstScreen} options={{headerShown:false}}/>
      <Stack.Screen name="login" component={LoginScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="signup" component={SignupScreen} options={{headerShown:false}}/>
      <Stack.Screen name="otp" component={OtpScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="pins" component={PinCreateScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="tab" component={TabScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="detailed" component={DetailedScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="enpn" component={EnterPinNumber}  options={{headerShown:false}}/>
      <Stack.Screen name="otpls" component={OtpLoginScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="hshindi" component={HomeScreenHindi}  options={{headerShown:false}}/>
       </Stack.Navigator>
     </NavigationContainer>
   )
 }
 
 export default App