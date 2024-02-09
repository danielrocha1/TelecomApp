import React, { useState } from "react";
import { View, Image, Animated } from "react-native";

export default function Title() {
  const [largura, setLargura] = useState(new Animated.Value(0));
  const [altura, setAltura] = useState(new Animated.Value(0));

  Animated.timing(largura, {
    toValue: 518,
    duration: 3700,
    useNativeDriver: false
  }
  ).start();


  return (
      <View>
        <Animated.Image
          style={{ width: largura, height: 110, top: -100,   }}
          source={require("../../Image/Logo.png")}
          resizeMode="contain"
          
        />
      </View>
    
  );
}
