import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const Googlesign = (props) => {
    const [userInfo, setUserInfo] = useState(null);
    //  const [userdata, setUserdata] = useState(null);
    const [userOut, setUserOut] = useState(null);
    
  

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '557588441440-1m2rggesqslvpoel4571r423ca27knsc.apps.googleusercontent.com',
        });
        signIn();
    },[]);

    console.log(props.check)

    const signIn = async () => {
        try {
            console.log('started')
            await GoogleSignin.hasPlayServices();          
            const usrInfo = await GoogleSignin.signIn();
            console.log(usrInfo,'userrrrr info')
            setUserInfo({ usrInfo });
            // setUserdata({...usrInfo})

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    const signOut = async () => {
        try {
            console.log('started sign out ')
        await GoogleSignin.signOut();
          setUserOut({ user: null }); // Remember to remove the user from your app's state as well
          setUserInfo(null);
          console.log('sinedout sucessfully')
        } catch (error) {
          console.error(error);
        }
      };

    //   const handleclick = ( ) =>{
        
    //     signIn()
    //   }

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

        {/* {userInfo == null ? 
        ( <TouchableOpacity onPress={()=>{handleclick()}}><Text style={{color:'red'}}>Googlesign</Text></TouchableOpacity>) : */}
            <TouchableOpacity onPress={signOut}><Text style={{color:'red'}}>signout</Text></TouchableOpacity>  
        </View>
    );
};

export default Googlesign
