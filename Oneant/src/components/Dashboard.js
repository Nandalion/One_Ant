import { View, Text, Button, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useCallback } from 'react'
import auth from '@react-native-firebase/auth'
import { screenNames } from '../router/router';


export default function Dashboard({ navigation }) {
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
    }

  ]


  const renderdata = (data) => {
    const { item } = data
    return (
      <View >
        <Text style={{ color: 'blue' }}>{item.name}</Text>
        <Image
          source={{ uri: item.url }}
          style={{ width: 100, height: 100,borderRadius:50}}
        />

      </View>
    )
  }



  return (
    <View>
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={Logout}>
        <Text style={{ color: 'red' }}>LogOut</Text>
      </TouchableOpacity>

      <FlatList
        data={sample}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderdata}
        //  horizontal={true}
      />
    </View>
  )
}