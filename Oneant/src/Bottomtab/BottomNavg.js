import { View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Box, Lifeboat, Menu, Piechart, ShoppingCart } from './DashBoardTabs';

const Tab = createBottomTabNavigator();


const BottomNavg = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? 'red' : 'gray'

          if (route.name === 'Box') {
            iconName = focused
              ? require('../assests/Bottomassests/box.png')
              : require('../assests/Bottomassests/box.png');
          } else if (route.name === 'lifeboat') {
            iconName = focused
              ? require('../assests/Bottomassests/lifeboat.png')
              : require('../assests/Bottomassests/lifeboat.png');
          } else if (route.name === 'menu') {
            iconName = focused
              ? require('../assests/Bottomassests/menu.png')
              : require('../assests/Bottomassests/menu.png');
          } else if (route.name === 'piechart') {
            iconName = focused
              ? require('../assests/Bottomassests/piechart.png')
              : require('../assests/Bottomassests/piechart.png');
          } else if (route.name === 'shoppingcart') {
            iconName = focused
              ? require('../assests/Bottomassests/shoppingcart.png')
              : require('../assests/Bottomassests/shoppingcart.png');
          }
       
          return <Image source={iconName} style={{ width: 25, height: 25, tintColor: focused ? 'blue' : 'red' }} />;
        }
       
        
      })}
    
   >
      <Tab.Screen name='Box' component={Box} tabBarIcon     />    
     
      <Tab.Screen name='lifeboat' component={Lifeboat}/>
      <Tab.Screen name='menu' component={Menu}/>
      <Tab.Screen name='piechart' component={Piechart}/>
      <Tab.Screen name='shoppingcart' component={ShoppingCart}/>
    </Tab.Navigator>
  )
}
export default BottomNavg