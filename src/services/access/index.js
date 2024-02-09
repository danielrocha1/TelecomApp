import React, { useContext, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AuthContext from "../../context/auth";

const SignIn = () => {

  useEffect(() => {
    
    signIn();
  }, []);

  const {signed, user, signIn} = useContext(AuthContext);
    console.log(signed)
  async function handleSignin() {
   signIn();
   console.log(user)
  }

  return (
    <View style={styles.container}>
      <Button title="Acessar" onPress={handleSignin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
export default SignIn;
