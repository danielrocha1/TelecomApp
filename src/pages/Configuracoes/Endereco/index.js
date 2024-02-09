import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
StyleSheet,
  
} from "react-native";
import { TouchableRipple,  } from "react-native-paper";
import { Divider } from "@rneui/themed";

import AuthContext from "../../../context/auth";


export default function ChangeEndereco({ navigation }) {
  const { allInfo, setUser } = useContext(AuthContext);
  const [modalActive, setModalActive] = useState(false);

  const ListEndereco = () => {
    return allInfo.map((user) => {
      return (
        <TouchableOpacity
          key={Math.floor(Math.random() * 1000)}
          onPress={() => {
            setUser(user);
            navigation.navigate("Início");
          }}
        >
          <View
            style={{
              marginTop: 10,
              marginBottom: 15,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                textAlign: "center",
                fontWeight: "bold",
                backgroundColor: "#fff",
              }}
            >
              {user.endereco}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

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
                  Mudar de endereço:
                </Text>
              </View>
              <Divider color={"white"} width={1} margin={10} />
              <View style={{ display: "flex", flexDirection: "column" }}>
                <ListEndereco />
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
        <View style={styles.infoBoxWrapper}>
          <View style={{ marginLeft: 5, marginTop: 5 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 22,
                
              }}
            >
              Alterar endereço do cadastro.
            </Text>
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  infoVencimento: {
    marginTop: 28,
    marginLeft: 5,
  },

  infoFatura: {
    marginTop: 28,
    marginRight: 9,
  },
  infoBoxWrapper: {
    display: "flex",
    
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: "grey",
    
  },
});
