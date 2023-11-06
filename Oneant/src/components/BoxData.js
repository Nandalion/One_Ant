import { StyleSheet, Text, View, Dimensions, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import * as images from '../assests/images'

const { width, height } = Dimensions.get('screen');


const BoxData = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#9038FF', height: height / 3 }}>
                <View style={{ flexDirection: 'row', marginTop: '10%', marginHorizontal: '2%' }}>
                    <Text style={{ color: '#ffff', paddingLeft: '40%' }}>DashBoard</Text>
                    <Text style={{ marginLeft: '38%', color: '#ffff' }}>+</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, width: width / 2, borderRadius: 50, height: height / 25, marginHorizontal: '25%', marginTop: '5%' }}><Image source={images.calendar} />
                    <View style={styles.pickerSubContainer}>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedLanguage}

                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>

                            <Picker.Item label="Last 7 days" value="Last 7 days" />
                            <Picker.Item label="Last Month" value="Last Month" />
                            <Picker.Item label="All time" value="All time" />

                        </Picker>
                    </View>
                </View>
                <View><Text style={{ color: '#ffff', textAlign: 'center', fontWeight: '500', fontSize: 48 }}>$17,242.98</Text></View>
                <Text style={{ textAlign: 'center', marginTop: '2%', color: '#ffff' }}>REVENUE</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.2, marginHorizontal: '10%', marginTop: '8%' }}>
                    <View><Text style={styles.textobj}>74</Text><Text  >ORDERS</Text></View>
                    <View style={{ borderEndWidth: 1, borderEndColor: 'black' }}></View>
                    <View><Text style={styles.textobj}>498K</Text><Text  >VIEWS</Text></View>
                    <View style={{ borderEndWidth: 1, borderEndColor: 'black' }}></View>
                    <View><Text style={styles.textobj}>32</Text><Text  >PRODUCTS</Text></View>
                </View>

            </View>

            <View>
                <Text style={{ textAlign: 'center' }}>Graphview</Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.1, marginHorizontal: '5%' }}>
                    <Text>Orders</Text><Text style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>View all</Text>
                </View>
            </View>
        </View>
    )
}

export default BoxData

const styles = StyleSheet.create({
    pickerSubContainer: {
        // height: 45,

        // borderColor: '#C9C9C9',
        // marginTop:'20%',
        //   flexDirection:'row',
        width: width / 2.5,


    },
    picker: {
        marginTop: -1,
        color: '#ffff',

    },
    textobj: {
        textAlign: 'center',
        color: '#ffff',
        fontWeight: 'bold',
    }

})