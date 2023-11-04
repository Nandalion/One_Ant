import {
  StyleSheet, Text, View,
  ImageBackground, 
  SafeAreaView, Dimensions,Image,
  TouchableOpacity
} from 'react-native'
import React, { useEffect,useState } from 'react'
import auth from '@react-native-firebase/auth'
// import * as images from '../assests/images'

import { screenNames } from '../router/router'


const {width, height} = Dimensions.get('screen')

const Splashscreen = ({navigation}) => {

  const [isNavigated, setIsNavigated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (!user && !isNavigated) {
        setIsNavigated(true);
        navigation.navigate(screenNames.splashscreen);
      } else if (user && !isNavigated) {
        setIsNavigated(true);
        navigation.navigate(screenNames.DashBoard);
      }
    });

    return () => {
      unsubscribe(); // Clean up the listener when the component unmounts
    };
  }, [isNavigated, navigation]);


  return (
    
      <SafeAreaView style={styles.container}>

        <View >
          {/* <ImageBackground source={images.bg} style={{ width, height, position: 'absolute' }} /> */}
          <View style={{ marginTop: '100%', marginHorizontal: '5%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <Image
                style={{}}
                source={images.Subtract}
              /> */}
              {/* <Text style={styles.text1}>ant</Text> */}
              {/* <Text style={{ borderWidth: 1, borderRadius: 10, width: '35%', color: '#FFFf', textAlign: 'center', marginLeft: 5, backgroundColor: 'gray', fontSize: 15 }}>FOR SELLERS</Text> */}
            </View>
            <View style={{ width: '100%' }}>
              {/* <Text style={{ color: 'white', marginVertical: '5%' }}>sign in and begin efficiently managing your business while on the move!</Text> */}
              <View style={styles.loginbuttons}>

                <TouchableOpacity style={styles.phonenumber} onPress={()=>navigation.navigate('Login')}>
                    <Text style={{textAlign:'center',color:'#ffff'}}>Continue With Phone Number</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '10%' }}>
                  <View style={{ borderBottomWidth: 1, width: '45%' }}></View>
                  {/* <Text style={{ borderWidth: 1, borderRadius: 10, width: '10%', textAlign: 'center', color: '#ffff', backgroundColor: 'grey' }}>Or</Text> */}
                  <View style={{ borderBottomWidth: 1, width: '45%' }}></View>
                </View>


                {/* <TouchableOpacity>
                  <View style={styles.Authbutton}>
                    <Image
                      style={{}}
                      source={images.google}
                    />
                    <Text style={{ color: '#ffff', marginLeft: '20%' }}  >Continue With Google</Text>

                  </View>
                </TouchableOpacity> */}


                {/* <TouchableOpacity>
                  <View style={styles.Authbutton}>
                    <Image
                      style={{}}
                      source={images.facebook}
                    />
                    <Text style={{ color: '#ffff', marginLeft: '20%' }}>Continue With facebook</Text>

                  </View>
                </TouchableOpacity> */}

              </View>
            </View>



          </View>

       
        </View>
      </SafeAreaView>
    



  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor:'red'
  },
  text1: {
    color: '#ffff',
    fontSize: 48,
    fontWeight:'700',
    paddingLeft:'2%'
   
    
  },
  loginbuttons: {
    // backgroundColor:'#3b5998' ,

  },
  phonenumber: {
    borderWidth: 1,
    backgroundColor: '#9038FF',
    borderRadius: 5,
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    color: '#ffff',
    marginBottom: 20,


    // height:'45%',
    // justifyContent:'center'
  },
  Authbutton: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    textAlign:'center',
    
    // borderColor:'#ffff',
    
  }
})