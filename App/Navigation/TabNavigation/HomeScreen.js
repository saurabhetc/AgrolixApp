import React,{useState,useEffect} from 'react'
import { SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { Customimages } from '../../constans/Customimages'

const HomeScreen = ({navigation}) => {
  const [selecteddata, setselecteddata] = useState();
  const [clickedId, setClickedId] = useState();
  const [data, setData] = useState([
    {
        id: '1',
        image: require('../../asset/images/homeimage.png'),
        heading: 'Now sell directly to the market',
        discription: 'Krishikisan Samridhi Agro Farming Producer Company Ltd. is an ISO 9001:2015 certified producer, wholesale importer & distributor of high-quality agricultural need focusing on improving the quality of life of farmers with small land holdings by helping them to increase their earnings, crop yields and cultivated areas.',
    },
    {
      id: '2',
      image: require('../../asset/images/fimages.png'),
      heading: 'Now sell directly to the market',
      discription: 'Krishikisan Samridhi Agro Farming Producer Company Ltd. is an ISO 9001:2015 certified producer, wholesale importer & distributor of high-quality agricultural need focusing on improving the quality of life of farmers with small land holdings by helping them to increase their earnings, crop yields and cultivated areas.',
    },
    {
      id: '3',
      image: require('../../asset/images/homeimage.png'),
      heading: 'Now sell directly to the market',
      discription: 'Krishikisan Samridhi Agro Farming Producer Company Ltd. is an ISO 9001:2015 certified producer, wholesale importer & distributor of high-quality agricultural need focusing on improving the quality of life of farmers with small land holdings by helping them to increase their earnings, crop yields and cultivated areas.',
    },
    {
      id: '4',
      image: require('../../asset/images/f2images.png'),
      heading: 'Now sell directly to the market',
      discription: 'Krishikisan Samridhi Agro Farming Producer Company Ltd. is an ISO 9001:2015 certified producer, wholesale importer & distributor of high-quality agricultural need focusing on improving the quality of life of farmers with small land holdings by helping them to increase their earnings, crop yields and cultivated areas.',
    },


])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Start Header pages */}
        <View style={styles.containerHeader}>
          <View style={{ flex: 0.6, }}>
            <Text style={{ color: '#457437', fontSize: 24, fontWeight: '500' }}>Welcome Prashant!</Text>
          </View>
          <View style={{ flex: 0.2 }}>
            <Image source={Customimages.Language} style={{width:26,height:26,left:50}} />
          </View>
          <View style={{ flex: 0.2 }}>
            <Image source={Customimages.notification1} style={{ width:26,height:26,left:20}} />
          </View>
        </View>
        {/* End Header pages */}

        {/* Start First silder page*/}

        <View style={{ marginTop: 15,height:170,}}>
                <FlatList 
                    data={data}
                    horizontal
                    contentContainerStyle={{ paddingVertical: 10 }}
                    ItemSeparatorComponent={() => (<View style={{ height: 25 }} />)}
                    renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={()=>{
                                  navigation.navigate('detailed', { data: item })
                                }} style={{
                                  justifyContent: 'center',
                            alignItems: 'center',
                            // paddingVertical: 5,
                            borderRadius:50,
                                }}>
                                         <View>
                                         <Image style={styles.imagesLD} 
                                         source={item.image}/>
                                        </View> 
                                        <View style={{position:'absolute',top:10,left:30}}>
                                          <Text style={{color:'#e9d51c',fontSize:30,fontWeight:'800'}}>70% OFF</Text>
                                          <Text style={{color:'white',fontSize:18,fontWeight:'500'}}>On Your First Sale</Text>
                                        </View>                           
                                </TouchableOpacity>                              
                            )
                    }}
                    keyExtractor={(item) => item.id}
                />                
                </View>
{/* End first silder page*/}
{/* Start Income and sale section page*/} 
<View style={{marginTop:20,height:180,justifyContent:'center',alignItems:'center'}}>
<View style={{flex:1,flexDirection:'row',width:'95%',left:5,}}>
  <View style={{flex:0.5}}>
  <Text style={{color:'black',fontSize:18,fontWeight:'500',}}>Total Income</Text>
  </View>
  <View style={{flex:0.5}}>
  <Text style={{color:'black',fontSize:18,fontWeight:'500',left:40}}>Total Sale</Text>
  </View>
</View>

  <TouchableOpacity style={styles.PriceNumer}>
  <View>
    <Text style={{fontSize:18,
      fontWeight:'500',
      width:2,
      height:50,
      backgroundColor:'#C5C5C5',
      left:160,
      top:20,
      }}></Text>
    </View>
    <View style={{flex:0.5,marginTop:30,marginLeft:30}}>
    <Text style={{color:'#000000',fontSize:18,fontWeight:'500'}}>1,50,000</Text>
    </View>
    <View style={{flex:0.5,marginTop:30,marginLeft:40,}}>
    <Text style={{color:'#000000',fontSize:18,fontWeight:'500',left:10}}>4,50,000</Text>
    </View>
  </TouchableOpacity>
</View>
{/* End Income and sale section page*/} 

{/* Start Khatabook section page*/} 
<View style={{height:250,bottom:32,}}>
  <View style={{marginLeft:15}}>
    <Text style={{color:'#000000',fontSize:18,fontWeight:'500'}}>Khatabook</Text>
  </View>

  <View style={{flexDirection:'row',flex:1,backgroundColor:'#f8f8f8',borderRadius:10,marginLeft:8,width:'96%',top:10}}>
    <View style={{flex:0.5,marginLeft:20,marginTop:40}}>
      <Text style={{color:'#000000',fontSize:18,fontWeight:'400'}}>Total</Text>
      <Text style={{color:'#000000',fontSize:16,fontWeight:'500'}}>Entries:245</Text>
    </View>
    <View style={{flex:0.25,marginLeft:10,marginTop:40}}>
    <Text style={{color:'#000000',fontSize:18,fontWeight:'400'}}>You Loss</Text>
      <Text style={{color:'#e12222',fontSize:16,left:40,fontWeight:'600'}}>80</Text>
    </View>
    <View style={{flex:0.25,marginLeft:10,marginTop:40}}>
    <Text style={{color:'#000000',fontSize:18,fontWeight:'400'}}>You Gain</Text>
      <Text style={{color:'#8bc044',fontSize:16,left:30,fontWeight:'600'}}>420</Text>
    </View>
  </View>
  <View style={{flexDirection:'row',flex:1,backgroundColor:'#f8f8f8',borderRadius:10,marginLeft:8,width:'96%'}}>
    <View style={{flex:0.6,marginLeft:20,marginTop:10}}>
      <Text style={{color:'#000000',fontSize:16,fontWeight:'400'}}>08 Sept 22 - 6:40 PM </Text>
      <Text style={{color:'#C5C5C5',fontSize:16,fontWeight:'600'}}>one line note and two line..</Text>
      <Text style={{color:'#C5C5C5',fontSize:16,fontWeight:'600'}}>650(You'll get)</Text>
    </View>
    <View style={{flex:0.2,marginLeft:10,marginTop:10}}>
      <Text style={{color:'#e12222',fontSize:16,left:10,fontWeight:'600'}}>80</Text>
    </View>
    <View style={{flex:0.2,marginLeft:10,marginTop:10}}>
      <Text style={{color:'#8bc044',fontSize:16,left:10,fontWeight:'600'}}>420</Text>
    </View>
  </View>
</View>
{/* End Khatabook section page*/} 


{/* Start Item sold section page*/} 
{/* <View style={{height:540,top:5}}>
  <View>
  <Text style={{color:'#000000',fontSize:18,fontWeight:'500',left:15,bottom:10}}>Item Sold</Text>
  </View>
  <View style={{backgroundColor:'#ffffff',width:'95%',height:300,left:10,borderRadius:8,elevation:1}}>
    <View style={styles.monthbarsold}>
<View style={{flex:0.33,backgroundColor:'#88bf40',borderRadius:4}}>
  <Text style={{fontSize:14,fontWeight:'500',alignSelf:'center',marginTop:10,}}>Week</Text>
</View>
<View style={{flex:0.33}}>
  <Text style={{color:'#88bf40',fontSize:14,fontWeight:'500',alignSelf:'center',marginTop:10,}}>Month</Text>
</View>
<View style={{flex:0.33}}>
  <Text style={{color:'#88bf40',fontSize:14,fontWeight:'500',alignSelf:'center',marginTop:10,}}>Year</Text>
</View>
    </View>
    <View style={{marginLeft:110,marginTop:30,}}>
      <View style={[styles.firstProgressLayer]}>
        <Text style={{fontSize:24,color:'#88bf40',left:30,marginTop:30,fontWeight:'700'}}>80%</Text>
      </View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',top:15}}>
      <Text style={{color:'#cecece',fontSize:18,fontWeight:'500'}}>Sale of this Week</Text>
    </View>
  </View>
  <View style={{flexDirection:'row',flex:1}}>
  <TouchableOpacity style={styles.progresscard}>
    <View style={{marginLeft:10,marginTop:30,}}>
      <View style={[styles.firstProgressLayer1]}>
        <Text style={{fontSize:18,color:'#88bf40',marginLeft:40,marginTop:10,fontWeight:'600',transform: [{rotateZ: '-120deg'}]}}>80%</Text>
      </View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#cecece',fontSize:16,fontWeight:'500'}}>Sale this Week</Text>
    </View>
  </TouchableOpacity>

  <TouchableOpacity style={styles.progresscard1}>
    <View style={{marginLeft:10,marginTop:30,}}>
      <View style={[styles.firstProgressLayer1]}>
        <Text style={{fontSize:18,color:'#88bf40',marginLeft:40,marginTop:20,fontWeight:'600',transform: [{rotateZ: '-120deg'}]}}>60%</Text>
      </View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#cecece',fontSize:16,fontWeight:'500'}}>My Bids</Text>
    </View>
  </TouchableOpacity>
  </View>
</View> */}

{/* End Item sold section page*/} 

{/* Start Rewards section page*/} 
<View style={{height:200,top:10}}>
<View>
<Text style={{color:'black',fontSize:18,fontWeight:'600',left:15}}>Rewards</Text>
</View>
<TouchableOpacity style={styles.rewardtips}>
  <View style={{flex:0.5,marginTop:30,marginLeft:10}}>
    <Text style={{color:'black',fontSize:18,fontWeight:'500'}}>Earn Tips and Rewards</Text>
    <Text style={{color:'#9b9b9b',fontSize:14,fontWeight:'600'}}>Lorem Ipsum is simply</Text>
    <Text style={{color:'#9b9b9b',fontSize:14,fontWeight:'600'}}>dummy text of the printing</Text>
    <Text style={{color:'#9b9b9b',fontSize:14,fontWeight:'600'}}>and typesetting</Text>  
  </View>
  <View style={{flex:0.5,}}>
    <Image style={{width:150,height:120,resizeMode:'cover',marginTop:20}} source={Customimages.reward}/>
  </View>
</TouchableOpacity> 
</View>
{/* End Rewards section page*/} 

{/* Start Refer Friends section page*/} 
<View style={{height:120,marginTop:40}}>
  <View>
  <Text style={{color:'black',fontSize:18,fontWeight:'600',left:15}}>Refer Friends</Text>
  </View>
    <TouchableOpacity style={styles.rfbutton}>
        <View style={{ flexDirection:'row'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image source={Customimages.money} 
          style={{width:30,height:30,right:30,}}/>
          </View>
          <View>
          <Text style={{ color:'white',fontSize:18,fontWeight:'500' }}>Refer Friends</Text>
          <Text style={{ color:'white',fontSize:12 }}>
          Invite your friends and get $50</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image 
          source={Customimages.shareicon} 
          style={{width:25,height:25,left:30,}}/>
          </View>       
        </View>   
   </TouchableOpacity>
</View>
{/* End Refer Friends section page*/} 

{/* Start Invite your friends section page*/} 
<View style={{height:310,}}>
<View style={{backgroundColor:'#f2f2f2',height:300,width:'95%',borderRadius:8,marginLeft:10}}>
<View>
<Text style={{color:'black',fontSize:18,fontWeight:'600',left:10,top:20}}>Invite Your friends to Agrolix</Text>
<Text style={{color:'black',fontSize:16,fontWeight:'500',left:10,top:40}}>
Invite friends to Agrolix and get 101
</Text>
<Text style={{color:'black',fontSize:18,fontWeight:'500',left:10,top:40}}>
When your friend sends their
</Text>
<TouchableOpacity >
<Text style={{color:'#88BF40',fontSize:16,fontWeight:'400',left:10,top:50}}>
Copy your code sl03c
</Text>
</TouchableOpacity>
</View>
<View style={{top:60,justifyContent:'flex-end',alignItems:'flex-end'}}>
  <Image source={Customimages.invate}/>
</View>
</View>
</View>
{/* End Refer Invite your friends section page*/} 
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  containerHeader:{
    flex:1,
    flexDirection:'row',
    marginTop:30,
    marginLeft:10
  },
  imagesLD:{
    width: 370,
      height: 155,
      resizeMode: "cover",
      borderRadius: 5,
      marginLeft:8
  },
  PriceNumer:{
    flex:1,
    flexDirection:'row',
    backgroundColor:"#f8f8f8",
    borderRadius:7,
    width:'95%',
    left:3,
bottom:60   , 
  },
  weekarrow:{
    flex:0.4,
    flexDirection:'row',
    backgroundColor:"#e59e9e",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    padding:20
  },
  PriceNumer1:{
    flex:0.6,
    flexDirection:'row',
    backgroundColor:"#e59e9e",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    padding:20
  },
  rfbutton: {
    padding:8,
    backgroundColor: '#457437',
    width: 365,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
    marginLeft:10,
    alignItems: 'center',
    justifyContent: 'center',        
    },
    rewardtips:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#f6f6f6',
      width:'95%',
      borderRadius:6,
      left:10,
      marginTop:10      
    },
    monthbarsold:{
      flexDirection:'row',
      backgroundColor:'#ffffff',
      width:'60%',
      height:40,
      borderRadius:8,
      elevation:1,
      borderColor:'#a2b99b',
      borderWidth:1,
      marginLeft:70,
      marginTop:40
    },
    
    firstProgressLayer: {
      width: 120,
      height: 120,
      borderWidth: 10,
      borderRadius: 80,
       borderTopColor:'#457437',
       borderColor: '#88bf40',
    },
    firstProgressLayer1: {
      width:100,
      height: 100,
      borderWidth: 10,
      borderRadius: 50,
      borderRightColor: '#ffffff',
      borderLeftColor:'#457437',
      borderTopColor:'white',
       transform: [{rotateZ: '120deg'}],
       marginLeft:25
    },
    progresscard:{
      flex:0.5, 
      backgroundColor:'#ffffff',
      height:170,
      borderRadius:8,
      elevation:1,
      top:20,
      marginLeft:10,
    },
    progresscard1:{
      flex:0.5, 
      backgroundColor:'#ffffff',
      height:170,
      borderRadius:8,
      elevation:1,
      top:20,
      marginLeft:10,
      marginRight:10
    }
})