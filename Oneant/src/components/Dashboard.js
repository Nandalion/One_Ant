import { View, Text ,Button,TouchableOpacity} from 'react-native'
import React, { useCallback } from 'react'
import auth from '@react-native-firebase/auth'
import { screenNames } from '../router/router';

export default function Dashboard({navigation}) {
    const Logout = useCallback(()=>{
        auth().signOut();
        navigation.replace(screenNames.splashscreen)
    },[])
  return (
    <View>
      <Text>Dashboard</Text>
     
      <TouchableOpacity onPress={Logout}>
        <Text style={{color:'red'}}>LogOut</Text>
      </TouchableOpacity>
    </View>
  )
}