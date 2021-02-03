import React from 'react'
import {
    View,
    Text,
    Image

} from 'react-native'
import Logo from '../images/logo.png'
export default function WorksList(props){
    return (
    <View>
       <Text>WorksList</Text>
       <Image source={Logo}/>
    </View>
    );
}