import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import { Divider } from "@rneui/themed";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import AuthContext from "../../../context/auth";

export default function ChangePassword({ navigation }) {
  
  const [modalActive, setModalActive] = useState(false);


  

  return (
    <View>
      <Modal
        onRequestClose={() => {
          setModalActive(false);
        }}
        visible={modalActive}
        transparent={true}
        animationType="slide"
      >
        <View
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <View
            style={{
              display: "flex",
              borderColor: "#000",
              borderWidth: 3,
              borderRadius: 12,
              alignItems: "center",
              backgroundColor: "#d3e8ff",
              shadowColor: "black",
              shadowOffset: { width: 4, height: 3 },
              shadowOpacity: 0.36,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalActive(false)}
              style={{
                backgroundColor: "#fff",
                marginTop: -25,
                marginLeft: 300,
                borderRadius: 30,
                borderWidth: 4,
              }}
            >
              <Text
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                X
              </Text>
            </TouchableOpacity>

            <View style={{}}>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Alterar Senha:
                </Text>
              </View>
              <Divider color={"white"} width={1} margin={10} />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text>Antiga Senha: </Text>
                <TextInput
                  placeholder=" ****"
                  keyboardType="default"
                  style={styles.input}
                />
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text>Nova Senha: </Text>
                <TextInput
                  placeholder=" ****"
                  keyboardType="default"
                  style={styles.input}
                />
              </View>
              <View style={{marginBottom:15,}}>
                <Button title="Confirmar" />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableRipple
        onPress={() => {
          setModalActive(true);
        }}
        rippleColor="lightblue"
        style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}
      >
        <View style={styles.menuItem}>
            <Icon name="account-key" color="#F4811E" size={25} />
            <Text style={styles.menuItemText} >
              Alterar senha
            </Text>
        </View>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: "#fff",
    height: 40,
    width: 230,
    borderRadius: 9,
  },
  menuItemText: {
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 26,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth:2,
    borderRadius:7,
    marginTop:1.5,
    marginBottom:2.2,
    borderColor:"#1E88E5",
    },
});
