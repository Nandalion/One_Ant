
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Approuter from './src/router/Approuter'


const App = () => {
  return(
   <SafeAreaView style={{flex:1}}>
      <Approuter/>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})