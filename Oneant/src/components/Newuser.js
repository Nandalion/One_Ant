import { View, Text, Button, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useCallback, useState } from 'react'
import auth from '@react-native-firebase/auth'
import { screenNames } from '../router/router';

const { width, height } = Dimensions.get('screen')


export default function Newuser({ navigation }) {
  const Logout = useCallback(() => {
    auth().signOut();
    navigation.replace(screenNames.splashscreen)
  }, [])


  // sample file 




  const sample = [
    {
      id: 1,
      name: "Umbrella",
      description: "Lady with a red umbrella",
      url: "https://i.imgur.com/pwpWaWu.jpg"
    },
    {
      id: 2,
      name: "fruits",
      description: "Flowers and some fruits",
      url: "https://i.imgur.com/KIPtISY.jpg"
    },
    {
      id: 3,
      name: 'scenery',
      description: "Beautiful scenery",
      url: "https://i.imgur.com/2jMCqQ2.jpg"
    },
    {
      id: 4,
      name: 'bird',
      description: "Some kind of bird",
      url: "https://i.imgur.com/QFDRuAh.jpg"
    },
    {
      id: 5,
      name: 'dragaons',
      description: "The attack of dragons",
      url: "https://i.imgur.com/8yIIokW.jpg"
    }, {
      id: 6,
      name: 'monster',
      description: "The attack of dragons",
      url: "https://i.imgur.com/8yIIokW.jpg"
    },


  ]
  const handleGetStarted = () => {
    navigation.navigate(screenNames.Dashboard);
  };


  const renderdata = ({ item }) => {

    return (
      <View style={{ marginLeft: 55 }}>

        <TouchableOpacity  >

          <View style={styles.dataview}>
            <Image
              source={{ uri: item.url }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={{ color: 'blue', textAlign: 'center', marginTop: '5%' }}>{item.name}</Text>
         

          </View>
        </TouchableOpacity >

      </View >
    )
  }
  return (
    <View style={{ width: '100%' }}>
      <View style={{ alignItems: 'center', marginTop: '5%' }}>

        <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>What are you selling ?</Text>
        <Text>select all that you sell</Text>
        <TouchableOpacity onPress={Logout}>
          <Text>LogOut</Text>
        </TouchableOpacity>
      </View>

      <FlatList

        data={sample}
        keyExtractor={(item) => item.id.toString()}
        // renderItem={renderdata}
        renderItem={renderdata}
        //  horizontal={true}
        numColumns={2}
      />

      <TouchableOpacity style={{ marginTop: '8%' }} onPress={handleGetStarted}>
        <Text style={styles.continuebuttton} >Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginLeft: '40%' }}><Text style={{ color: 'black', borderBottomWidth: 1, width: '31%' }}>I'll do it later</Text></TouchableOpacity>
    </View>
  )

}
const styles = StyleSheet.create({
  continuebuttton: {
    borderWidth: 1,
    backgroundColor: '#9038FF',
    borderRadius: 5,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 12,
    color: '#ffff',
    marginBottom: 20,
    width: '90%',
    marginHorizontal: '5%'
  },
  dataview: {
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: -19,
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 4,
    backgroundColor: '#ffff',

  }
})