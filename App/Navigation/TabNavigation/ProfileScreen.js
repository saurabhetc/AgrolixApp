import { SafeAreaView, StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Customimages } from '../../constans/Customimages'

const ProfileScreen = (navigation) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
    <TouchableOpacity onPress={() => {
    navigation.goBack()}}>
       <Image style={{ width:20, height:20, marginTop:15, marginLeft: 10 }}
        source={Customimages.back} />
     </TouchableOpacity>
       </View>
      <ScrollView>
    <View>
      <Text style={{color:'#88BF40',fontSize:22,fontWeight:'600',marginTop:20,marginLeft:20}}>My Account</Text>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',top:30}}>
      <Image source={Customimages.profile} style={styles.profileimage} />
      <Text style={{color:'#000000',fontSize:18,fontWeight:'500',marginTop:10}}>Prashant</Text>
      <Text style={{color:'#C5C5C5',fontSize:18,fontWeight:'500',marginTop:10}}>Prashantetcetera@gmail.com</Text>
    </View>
 {/* Start Edut Profile */}
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.profilebutton}>
    <View style={{ flexDirection:'row'}}>
          <View>
          <Text style={{ color:'white',fontSize:18,fontWeight:'500' }}>Edit Profile</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image 
          source={Customimages.edit} 
          style={{width:22,height:22,left:20,}}/>
          </View>       
        </View>  
   </TouchableOpacity>
    </View>
 {/* End Edut Profile */}

 {/* Start Refer Feiends */}
    <View style={{ justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.rfbutton}>
        <View style={{ flexDirection:'row'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={Customimages.money} 
          style={{width:30,height:30,right:30,}}/>
          </View>
          <View>
          <Text style={{ color:'white',fontSize:18,fontWeight:'500' }}>Refer Friends</Text>
          <Text style={{ color:'white',fontSize:12 }}>
          Invite your friends and get ₹50</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image 
          source={Customimages.shareicon} 
          style={{width:25,height:25,left:30,}}/>
          </View>       
        </View>   
   </TouchableOpacity>
    </View>
 {/* End Refer Feiends */}
 {/* Start My Crop */}
    <View style={{ justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.mycropbutton}>
        <View style={{ flexDirection:'row'}}>
          <View >
          <Image source={Customimages.mycrop} style={{width:25,height:25}} />
          </View>
          <View>
          <Text style={{ color:'#C5C5C5',fontSize:16,fontWeight:'400',left:10 }}>My Crop</Text>
          </View>    
          <View >
          <Image source={Customimages.forwordspace} style={{width:25,height:25,left:190}} />
          </View>  
        </View>   
   </TouchableOpacity>
    </View>
 {/* End My Crop */}
 {/* Start setting */}
 <View style={{ justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.mycropbutton}>
        <View style={{ flexDirection:'row'}}>
          <View >
          <Image source={Customimages.setting} style={{width:25,height:25}}/>
          </View>
          <View>
          <Text style={{ color:'#C5C5C5',fontSize:16,fontWeight:'400',left:10 }}>Setting</Text>
          </View>    
          <View >
          <Image source={Customimages.forwordspace} style={{width:25,height:25,left:197}} />
          </View>  
        </View>   
   </TouchableOpacity>
    </View>
 {/* End setting */}
 {/* Start notification */}
 <View style={{ justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.mycropbutton}>
        <View style={{ flexDirection:'row'}}>
          <View >
          <Image source={Customimages.notification} style={{width:25,height:25}} />
          </View>
          <View>
          <Text style={{ color:'#C5C5C5',fontSize:16,fontWeight:'400',left:10 }}>Notification</Text>
          </View>    
          <View >
          <Image source={Customimages.forwordspace} style={{width:25,height:25,left:166}} />
          </View>  
        </View>   
   </TouchableOpacity>
    </View>
 {/* End notification */}
 {/* Start payment */}
 <View style={{ justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.mycropbutton}>
        <View style={{ flexDirection:'row'}}>
          <View >
          <Image source={Customimages.payment} style={{width:25,height:25}}/>
          </View>
          <View>
          <Text style={{ color:'#C5C5C5',fontSize:16,fontWeight:'400',left:10 }}>Refer Friends</Text>
          </View>    
          <View >
          <Image source={Customimages.forwordspace} style={{width:25,height:25,left:157}} />
          </View>  
        </View>   
   </TouchableOpacity>
    </View>
 {/* End payment */}
 {/* Start Language */}
 <View style={{ justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.mycropbutton}>
        <View style={{ flexDirection:'row'}}>
          <View >
          <Image source={Customimages.language1} style={{width:25,height:25}}/>
          </View>
          <View>
          <Text style={{ color:'#C5C5C5',fontSize:16,fontWeight:'400',left:10 }}>Language</Text>
          </View>    
          <View >
          <Image source={Customimages.forwordspace} style={{width:25,height:25,left:180}} />
          </View>  
        </View>   
   </TouchableOpacity>
    </View>
 {/* End Language */}
 {/* Start customer support */}
 <View style={{ justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity style={styles.mycropbutton}>
        <View style={{ flexDirection:'row'}}>
          <View >
          <Image source={Customimages.customer} style={{width:25,height:25}}/>
          </View>
          <View>
          <Text style={{ color:'#C5C5C5',fontSize:16,fontWeight:'400',left:10 }}>Customer</Text>
          </View>    
          <View >
          <Image source={Customimages.forwordspace} style={{width:25,height:25,left:180}} />
          </View>  
        </View>   
   </TouchableOpacity>
    </View>
 {/* End Customer support */}    

 {/* Start Logout section */}
 <View style={{ justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity 
    style={styles.mycropbutton}
    
    >
        <View style={{ flexDirection:'row'}}>
          <View >
          <Image source={Customimages.logout} style={{width:25,height:25}} />
          </View>
          <View>
          <Text style={{ color:'#C5C5C5',fontSize:16,fontWeight:'400',left:10 }}>Logout</Text>
          </View>    
          {/* <View>
          <Image source={Customimages.forwordspace} style={{width:25,height:25,left:197}} />
          </View>   */} 
        </View>   
   </TouchableOpacity>
    </View>
 {/* End Logout section */}  
    </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    profileimage:{
      width:80,
      height:80,
    },
    profilebutton: {
      padding: 11,
      backgroundColor: '#88bf40',
      width: 330,
      borderRadius: 7,
      elevation: 2,
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center'
      },
      rfbutton: {
        padding:4,
        backgroundColor: '#457437',
        width: 330,
        borderRadius: 10,
        elevation: 2,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',        
        },
        mycropbutton:{
           padding:12,
          backgroundColor: 'white',
          width: 330,
          borderRadius: 10,
          elevation: 1,
          marginTop: 20,
        }
})