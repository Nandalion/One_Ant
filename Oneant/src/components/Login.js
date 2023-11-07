import {
    StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions,
    SafeAreaView, TextInput
} from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import * as images from '../assests/images'
import PhoneInput from 'react-native-phone-number-input';
import auth from '@react-native-firebase/auth'
import { screenNames } from '../router/router';


const { width, height } = Dimensions.get('screen');

const Login = ({ navigation }) => {
    const phoneInput = useRef(null);

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    //verificetiondata
    const [verificationId, setVerificationID] = useState(null);


    // console.log(showMessage,'hdhhhdh')
    // console.log(value)
    // console.log(formattedValue ,'valu crt varutha')
    // console.log(valid,'asdfas')

    const [otp, setOtp] = useState('');



    const handlingInput = (text) => {
        if (text.length <= 13) {
            setFormattedValue(text)
            console.log(text)
        }
    }

    const otpdata = useCallback(async () => {
        console.log('started')
        try {

            const data = await auth().signInWithPhoneNumber(formattedValue, true)

            // console.log(data, "enna varum")
            setVerificationID(data);

            console.log("ended")

        } catch (e) {
            console.log(e)
        }

    }, [formattedValue])


    const verifyotp = useCallback(async () => {
        try {

            const response = await verificationId.confirm(otp);
            navigation.replace(screenNames.Newuser)
            console.log(response, 'verified')
        } catch (e) {
            console.log(e)
        }

    }, [verificationId, otp])


  




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={images.bg} // Replace with your image path
                style={{ flex: 1 }}
            >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ backgroundColor: 'white', padding: 16, height: height / 1.8, borderRadius: 20, marginTop: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{ marginLeft: '30%', fontWeight: '600', fontSize: 18, textAlign: 'center' }}>Sign in Or Sign up</Text>
                    </View>
                    <View style={{ borderWidth: 1, marginTop: '2%', borderColor: '#F6F7F9' }}>

                    </View>
                    <View style={{ borderWidth: 1, marginTop: '2%', width: '90%', marginHorizontal: '5%', height: '10%', borderRadius: 5, borderColor: 'gray' }}>

                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={value}
                            defaultCode="IN"
                            layout="first"
                            onChangeText={(text) => {
                                setValue(text);
                            }}
                            onChangeFormattedText={(text) => {
                                handlingInput(text)
                            }}
                            containerStyle={styles.phoneContainer}
                            textContainerStyle={styles.textInput}
                            autoFocus
                        />

                    </View>
                    <View>
                        {!valid ? <Text style={{ color: 'red', marginLeft: '25%', marginTop: '2%' }}>Enter the 10 digit valid number </Text> : null}

                        {
                            verificationId ?

                                <TextInput
                                    style={styles.input}
                                    keyboardType='number-pad'
                                    maxLength={6} // Limiting input to 6 characters
                                    onChangeText={setOtp}
                                    value={otp}
                                    placeholder="Enter OTP"
                                /> : null}


                    </View>

                    <View>

                        {verificationId ? <TouchableOpacity style={styles.verify} onPress={verifyotp} >
                            <Text style={styles.buttton} > VerifyOtp</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity style={{ marginTop: '8%' }} onPress={() => {
                                const checkValid = phoneInput.current?.isValidNumber(value);
                                setValid(checkValid ? checkValid : false);
                            }} onPressOut={valid ? otpdata : null}  >
                                <Text style={styles.continuebuttton} >continue</Text>
                            </TouchableOpacity>}
                    </View>

                </View>
                
                  

            </View>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default Login

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
    phoneContainer: {
        width: '97%',
        height: '100%',
        marginHorizontal: '2%',
    },
    textInput: {
        paddingVertical: 0,
    },
    input: {
        height: 40,
        borderWidth: 1,
        width: "50%",
        marginHorizontal: '27%',
        textAlign: 'center',
        marginTop: '2%',
        marginBottom: '-5%'
    },
    buttton: {
        borderWidth: 1,
        backgroundColor: '#9038FF',
        borderRadius: 5,
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        color: '#ffff',
        marginBottom: 20,
        width: '90%',
        marginHorizontal: '5%'
    },
    verify: {
        marginTop: '10%'
    }
})