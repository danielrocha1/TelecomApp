import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import {TextInputMask} from "react-native-masked-text"

import { Button } from "react-native-paper";

import AuthContext from "../../context/auth";

import Loading from "../Loading/index";

export default function Form() {
  const [fade, setFade] = useState(new Animated.Value(0));
  Animated.timing(fade, {
    toValue: 100,
    duration: 25000,
    useNativeDriver: false,
  }).start();
  

  const { signed, user, signIn } = useContext(AuthContext);
  console.log(signed);

  const [visible, setvisible] = useState(false);

  async function handleSignin() {
    signIn();
    console.log(user);
    setvisible(true);
  }

  const [passText, setpassText] = useState("");
  const [emailText, setemailText] = useState("");
  const [passcolor, setpasscolor] = useState("#FDFDFD");
  const [emailcolor, setemailcolor] = useState("#FDFDFD");
  
  useEffect(() => {
    console.log(passText);
    if (passText !== "") {
      setpasscolor("#0083CD");
    } else {
      setpasscolor("#FDFDFD");
    }
    if (emailText !== "") {
      setemailcolor("#0083CD");
    } else {
      setemailcolor("#FDFDFD");
    }
  }, [passText, emailText]);

  return (
    <View>
      <View style={styles.email}>
        <Animated.View style={{ opacity: fade }}>
          <Text style={{ top: -3, fontWeight: "900", color: emailcolor }}>
            Email
          </Text>
          <TextInput
            placeholder=" Ex.: @gmail.com"
            keyboardType="email-address"
            onChangeText={(text) => setemailText(text)}
            style={{
              backgroundColor: "#ebecf0",
              height: 40,
              borderRadius: 9,
              borderColor: emailcolor,
              borderWidth: 2,
              textAlign:"center",
            }}
          />
          <View style={styles.password}>
            <Text style={{ top: -3, fontWeight: "900", color: passcolor }}>
              Senha
            </Text>
            <TextInputMask
            style={{
                backgroundColor: "#ebecf0",
                height: 40,
                borderRadius: 9,
                borderColor: passcolor,
                borderWidth: 2,
                textAlign:"center",
              }}
                type={'cpf'}
                placeholder=" Ex.: 001.001.001-01"
                onChangeText={text => {
                  setpassText({
                    cpf: text
                    })
              }}/>
          </View>
          <View style={{ flexDirection: "column"}}>
            <View >
              <Loading visible={visible} />
              <Button
        mode="contained"
        onPress={handleSignin}
        style={styles.button}
      >
        Login
      </Button>
            </View>
          </View>
        </Animated.View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  email: {
    width: 350,
    height: 60,
  },
  password: {
    top: 15,
  },
  button: {
    backgroundColor:'#fd9b4d',
    top: 30,
  },
});
