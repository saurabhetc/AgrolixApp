import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SellScreen from './SellScreen';
import RequestsScreen from './RequestsScreen';
import ProfileScreen from './ProfileScreen';
import { Customimages } from '../../constans/Customimages';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}
    options={{headerShown:false,tabBarLabel:'Home',tabBarLabelStyle:{fontSize:13},
    tabBarIcon: (focus) =>{
      return(
        <Image style={{tintColor: focus.focused ? '#457437' : '#C5C5C5',width:22,height:22}} 
        source={Customimages.home} />
      )
    }
    }}/>
    <Tab.Screen name="Sell" component={SellScreen} 
    options={{headerShown:false,tabBarLabel:'Sell',tabBarLabelStyle:{fontSize:13},
    tabBarIcon: (focus) =>{
      return(
        <Image style={{tintColor:focus.focused ? '#457437' : '#C5C5C5',width:22,height:22}}
        source={Customimages.sell}/>
      )
    }
    }}/>
    <Tab.Screen name="Requests" component={RequestsScreen} 
    options={{headerShown:false,tabBarLabel:'Requests',tabBarLabelStyle:{fontSize:13},
    tabBarIcon: (focus) =>{
      return(
        <Image style={{tintColor:focus.focused ? '#457437' : '#C5C5C5',width:22,height:22}}
        source={Customimages.requests}/>
      )
    }
    }}/>
    <Tab.Screen name="Profile" component={ProfileScreen} 
    options={{headerShown:false,tabBarLabel:'Profile',tabBarLabelStyle:{fontSize:13},
    tabBarIcon: (focus) =>{
      return(
        <Image style={{tintColor:focus.focused ? '#457437' : '#C5C5C5',width:22,height:22}}
        source={Customimages.profile1}/>
      )
    }
    }}/>
  </Tab.Navigator>
  )
}

export default TabScreen

const styles = StyleSheet.create({})