import React, { useState  } from "react";
import {View, Animated, Linking,TouchableOpacity } from "react-native";
import { Text } from 'react-native-paper';

export default function NewClient () {
const [slide, setSlide] = useState(new Animated.Value(70))

   Animated.timing(
    slide,{
    toValue: 0,
    duration:2500,
    useNativeDriver: false
    }).start() 


  return (
      <Animated.View style={{marginTop:slide, top:180, }}>
        <TouchableOpacity
          
          onPress={() => {
                Linking.openURL(
             ''
                );
              }}
        >
          <Text style={{textDecorationLine:"underline",color:"white", fontSize:19, fontWeight:"700" }}>Quero ser cliente</Text>
        </TouchableOpacity>
      
    </Animated.View>
 

  );
}