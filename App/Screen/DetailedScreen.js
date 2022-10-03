import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Customimages } from '../constans/Customimages'

const DetailedScreen = (props) => {
    const { data } = props.route.params
  return (
   <ScrollView>
     <View>
                    <Text style={styles.topheadline}>{data.heading}</Text>
                    <Image style={styles.imagescover}
                     
                    >{data.Image}</Image>
                    <Text style={styles.subheadline}>{data.discription}</Text>
                </View>
   </ScrollView>
  )
}

export default DetailedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightwhite'
    },
    topheadline: {
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
        marginTop: 20,
        marginLeft: 15,
    },
    imagescover: {
        height: 200,
        width: 370,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10
    },
    subheadline: {
        color: 'black',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 10
    },
})