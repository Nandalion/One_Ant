import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { appRoutes } from './router';

const Stack = createNativeStackNavigator()

export default function Approuter() {
    return (
        <View>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ header: () => null }}>
                   {appRoutes.map((item)=><Stack.Screen name={item.name} key={item.name} component={item.components}/>)}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}