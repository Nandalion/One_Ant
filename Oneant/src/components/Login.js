import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    
    <View style={{ flex: 1,justifyContent:'center' }}>

      {/* {showMessage && (
        <View>
          <Text>Value : {value}</Text>
          <Text>Formatted Value : {formattedValue}</Text>
          <Text>Valid : {valid ? "true" : "false"}</Text>
        </View>
      )} */}

      {/* <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IN"
        layout="first"
        onChangeText={(text) => {
         
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      /> */}
      <TouchableOpacity
        style={styles.button}
        // onPress={() => {
        //   const checkValid = phoneInput.current?.isValidNumber(value);
        //   setShowMessage(true);
        //   setValid(checkValid ? checkValid : false);
        // }}
      >
        {/* <Text>Check</Text> */}
      </TouchableOpacity>
      {/* <Text>Login</Text>
      <Button title='Button' onPress={() => navigation.navigate("Googlesign")} />
      <Button title="Confirm Code" onPress={() => confirmCode()} /> */}
     
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    
  }
})