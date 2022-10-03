import { SafeAreaView, StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { Customimages } from '../../constans/Customimages';

const RequestsScreen = () => {
const [clickedId, setClickedId] = useState();
  const [category,setCategory]=useState([
    'All Requests',
    'Pending',
    'Accepted',
    'Other',
  ])
  return (
    <SafeAreaView >
{/* Start product category flatlist component */}
<View style={{ marginVertical: 20 }}>

<View>
    <TouchableOpacity onPress={() => {
    navigation.goBack()}}>
       <Image style={{ width:20, height:20, marginTop:15, marginLeft: 10 }}
        source={Customimages.back} />
     </TouchableOpacity>
       </View>
<View>
        <Text style={{color:'#8cc147',fontSize:18,fontWeight:'600',marginLeft:30,top:12}}>My Requests</Text>
      </View>
                    <FlatList style={{top:20}}
                        data={category}
                        contentContainerStyle={{ paddingHorizontal: 15,}}
                        ItemSeparatorComponent={() => (<View style={{ width:15 }} />)}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                     backgroundColor: clickedId == item ? '#457437' : 'white',
                                    paddingVertical: 8,
                                    borderRadius:50,
                                    paddingHorizontal: 20,
                                }} onPress={() => {
                                    setClickedId(item)
                                }}>
                                <Text style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                     color: item == clickedId ? 'white' : 'black',
                                     borderColor:"#88bf40"
                                }}>{item}
                                </Text>
                            </TouchableOpacity >)
                        }

                        horizontal={true}
                        keyExtractor={(item) => item.id}
                    >
                    </FlatList>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:80}}>
                        <Image source={Customimages.file} />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:60}}>                        
              <Text style={{color:'black',fontSize:18,alignSelf:'center'}}>You have not create any Requests to sell</Text>
              <Text style={{color:'black',fontSize:18,alignSelf:'center'}}>your product</Text>                   
                    </View>
                </View>
{/* Start product category flatlist component */}

                </SafeAreaView>

  )
}

export default RequestsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})