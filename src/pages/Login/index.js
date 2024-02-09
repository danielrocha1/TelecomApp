import React, { useState  } from "react";
import { StyleSheet, View, Animated, TouchableOpacity, Text } from "react-native";
import Title from "../../components/Title";
import Main from "../../components/Main";
import NewClient from "../../components/NewClient";
import {LinearGradient} from "expo-linear-gradient"

export default function Login() {


  return (
   
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255,255,255,.9)', 'transparent']}
        style={styles.background}
      />
      <Title  />
      <Main  />
      <NewClient/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#77CEFF',
    flexDirection:"column",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
