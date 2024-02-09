import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { TouchableRipple,ScrollView } from "react-native-paper";
import { Divider } from "@rneui/themed";

import AuthContext from "../../context/auth";
import * as Clipboard from "expo-clipboard";

const ListFaturas = () => {
const { user } = useContext(AuthContext);
  var userPlano = user.plano.replace(/\D/g, "");
  console.log(user.fatura)
    return user.fatura.map((item) => {
          return (
            <Faturas
              key={Math.floor(Math.random() * 1000)}
              plano={userPlano}
              valor={user.valor}
              vencimento={item.vencimento}
            />
          );
        }).reverse()  
  };

  
const Faturas = (props) => {
  const [modalActive, setModalActive] = useState(false);
  
  

  const boleto = "00000.00000 00000.000000 00000.000000 0 00000000000000";

  const copyToClipboard = () => {
    Clipboard.setString(boleto);
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
                    Plano {props.plano}MB | Boleto: {props.vencimento}
                  </Text>
                </View>
                <Divider color={"white"} width={1} margin={10} />
                <Text
                  style={{ marginTop: 5, fontSize: 20, textAlign: "center" }}
                >
                  Seu código de barras:
                </Text>
                <TouchableOpacity onPress={copyToClipboard}>
                  <View
                    style={{ marginTop: 5, paddingLeft: 25, paddingRight: 25 }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        textAlign: "center",
                        fontWeight: "bold",
                        backgroundColor: "#fff",
                      }}
                    >
                      {boleto}
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{ marginTop: 20, paddingLeft: 25, paddingRight: 25 }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 17,
                    }}
                  >
                    Clique no código acima para copiar o código de barras deste
                    boleto.
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                    paddingLeft: 25,
                    paddingRight: 25,
                  }}
                >
                  <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                    Ou
                  </Text>
                </View>
                <TouchableOpacity onPress={() => !alert("Download realizado!")}>
                  <View
                    style={{
                      marginBottom: 25,
                      paddingLeft: 25,
                      paddingRight: 25,
                    }}
                  >
                    <Text
                      style={{
                        fontStyle: "italic",
                        textDecorationLine: "underline",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 17,
                      }}
                    >
                      Clique aqui para baixar o PDF deste boleto
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>  

      <TouchableRipple
        onPress={() => {
          setModalActive(true);
        }}
        rippleColor="lightblue"
        style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}>
        <View style={styles.infoBoxWrapper}>
          <View style={{ marginLeft: 5, marginTop: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>
              Plano de {props.plano}MB - {props.valor}
            </Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.infoVencimento}>
              <Text style={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
                Vencimento: {props.vencimento}
              </Text>
            </View>
            <View style={styles.infoFatura}>
              <Text style={{ color: "red", fontWeight: "bold", fontSize: 18 }}>
                Fatura em aberto
              </Text>
            </View>
          </View>
        </View>
      </TouchableRipple>
      </View>

    
  );
}
export default ListFaturas;

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
    flexDirection: "column",
    borderRadius: 8,
    borderWidth: 2.5,
    borderColor: "grey",
  },
});