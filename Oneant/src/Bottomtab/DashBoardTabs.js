import React from'react'
import{View,Image ,Text} from 'react-native';
import BoxData from '../components/BoxData';
import LifeBoat from '../components/LifeBoat';
import Menudata from '../components/Menudata';
import PiechartHome from '../components/PiechartHome ';
import ShoppingCartdata from '../components/ShoppingCartdata';


export const Box =() =>{
    return <BoxData/>
}
export const Lifeboat =() =>{
    return <LifeBoat/>
    
}
export const Menu =() =>{
    return <Menudata/>
        
    
}
export const Piechart =() =>{
    return <PiechartHome/>
        
    
}
export const ShoppingCart =() =>{
    return <ShoppingCartdata/>
     
    
}