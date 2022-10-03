import React, { useState } from 'react';
import {
    View, Text, FlatList,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Customimages } from '../../constans/Customimages';


const BhartDrawerScreen = ({ navigation }) => {
    const [selecteddata, setselecteddata] = useState();
    const [clickedId, setClickedId] = useState();

    const [category, setCategory] = useState([
      'All',
      'Wheat',
      'Fruits',
      'Vegetables',
      'Other',
    ])

    const [data, setData] = useState([
        {
            id: '1',
            image: require('../../asset/images/fimages.png'),
            heading: 'Now sell directly to the market',
            discription: 'Krishikisan Samridhi Agro Farming Producer Company Ltd. is an ISO 9001:2015 certified producer, wholesale importer & distributor of high-quality agricultural need focusing on improving the quality of life of farmers with small land holdings by helping them to increase their earnings, crop yields and cultivated areas.',
        },
        {
          id: '2',
          image: require('../../asset/images/f2images.png'),
          heading: 'Now sell directly to the market',
          discription: 'Krishikisan Samridhi Agro Farming Producer Company Ltd. is an ISO 9001:2015 certified producer, wholesale importer & distributor of high-quality agricultural need focusing on improving the quality of life of farmers with small land holdings by helping them to increase their earnings, crop yields and cultivated areas.',
        },
        {
          id: '3',
          image: require('../../asset/images/fimages.png'),
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
            <View style={{flex:1, flexDirection:'row',top:20,}}>
        <View style={{flex:0.1}}>
          <Image source={Customimages.map} style={{width:25,height:25,alignSelf:'center',top:2}} />
        </View>
        <View style={{flex:0.7,justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'black',fontSize:14,fontWeight:'500',right:35}}>
          Skye Earth Corporate Park</Text>
          <Text style={{color:'black',alignContent:'center',fontSize:12,left:5}}>
             Address: 105,AB Rd,Sector C, Slice 5, Part 11,
             Shalimar Township, Indore, M.P
          </Text>
        </View>
        <View style={{flex:0.1}}>
        <Image source={Customimages.search} style={{width:25,height:25, alignSelf:'center',}} />
        </View>
        <View style={{flex:0.1}}>
        <Image source={Customimages.notification} style={{width:25,height:25,alignSelf:'center',}} />
        </View>
      </View>
{/* Start Hello prashant flatlist component*/}
<View>
      <View>
        <Text style={{color:'#008837',fontSize:18,fontWeight:'500',marginLeft:15,top:35}}>Hello,Prashant</Text>
      </View>
                <FlatList style={{ marginTop: 20 }}
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
                            paddingVertical: 5,
                            borderRadius:50,
                                }}>
                                    <View style={{justifyContent:'center',alignItems:'center',}} >
                                        <View key={item}>
                                         <Image style={styles.images} source={item.image}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                    }}
                    keyExtractor={(item) => item.id}
                />
            
                </View>

{/* End Hello prashant flatlist component*/}

{/* Start product category flatlist component*/}
<View style={{ marginVertical: 20 ,}}>
<View>
        <Text style={{color:'#000000',fontSize:18,fontWeight:'500',marginLeft:15,bottom:10}}>Product Category</Text>
      </View>
                    <FlatList
                        data={category}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        ItemSeparatorComponent={() => (<View style={{ width:15 }} />)}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: clickedId == item ? '#457437' : 'white',
                                    paddingVertical: 5,
                                    borderRadius:50,
                                    borderColor:'#457437',
                                    borderWidth:1,
                                    paddingHorizontal: 25,                              
                                }}onPress={() => {
                                  setClickedId(item)
                              }}>
                            
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    color: item == clickedId ? 'white' : '#457437',
                                }}>{item}
                                </Text>
                            </TouchableOpacity >)
                        }

                        horizontal={true}
                        keyExtractor={(item) => item.id}
                    >
                    </FlatList>
                </View>
{/* End product category flatlist component*/}

{/* Start Long Durability flatlist component*/}

        <View>
      <View>
        <Text style={{color:'#000000',fontSize:18,fontWeight:'500',marginLeft:15,}}>Long Durability</Text>
      </View>

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
                            paddingVertical: 5,
                            borderRadius:50,
                                }}>
                                         <View>
                                         <Image style={styles.imagesLD} 
                                         source={Customimages.f1images}/>
                                        </View>                                    
                                </TouchableOpacity>
                            )
                    }}
                    keyExtractor={(item) => item.id}
                />
                </View>
{/* End Long Durability flatlist component*/}

{/* Start med durability flatlist component*/}
        <View>
      <View>
        <Text style={{color:'#000000',fontSize:18,fontWeight:'500',marginLeft:15,top:10}}>Med Durability</Text>
      </View>

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
                            paddingVertical: 5,
                            borderRadius:50,
                                }}>                                    
                                        <View>
                                         <Image style={styles.images} source={Customimages.f2images}/>                                     
                                    </View>
                                </TouchableOpacity>
                            )
                    }}
                    keyExtractor={(item) => item.id}
                />
                </View>
{/* End med durability flatlist component*/}
{/* Start Perishable flatlist component*/}
        <View>
      <View>
        <Text style={{color:'#000000',fontSize:18,fontWeight:'500',marginLeft:15,top:10}}>Perishable</Text>
      </View>

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
                            paddingVertical: 5,
                            borderRadius:50,
                                }}>
                                    
                                        <View>
                                         <Image style={styles.imagesp} source={Customimages.f3images}/>
                                       
                                    </View>
                                </TouchableOpacity>
                            )
                    }}
                    keyExtractor={(item) => item.id}
                />
                </View>
{/* End Perishable flatlist component*/}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor:'white'
    },

    images: {
        width: 368,
        height: 170,
        resizeMode: "cover",
        borderRadius: 12,
        marginLeft:10,
        top:10
    },
    imagesLD:{
      width: 100,
        height: 120,
        resizeMode: "cover",
        borderRadius: 5,
        marginLeft:20
    },
    imagesp:{
      width: 200,
        height: 150,
        resizeMode: "cover",
        borderRadius: 5,
        marginLeft:20
    }
    

})

export default BhartDrawerScreen;