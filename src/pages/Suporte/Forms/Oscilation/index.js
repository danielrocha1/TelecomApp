import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { RadioButton, Button, Divider } from "react-native-paper";

export default function Oscilation() {
  const [equipChecked, setequipChecked] = React.useState("");

  const [onlyWifi, setonlyWifi] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5, marginRight: 5 }}>
            O sinal do Wi-Fi está desaparecendo dos dispositivos?
          </Text>
        </View>
        <View style={styles.radio}>
          <View style={{ paddingLeft: 5 }}>
            <Text style={{ paddingRight: 5 }}> Não</Text>
            <RadioButton
              value="sinal de wifi não desaparece dos seus dispositivos,"
              status={
                equipChecked === "sinal de wifi não desaparece dos seus dispositivos," ? "checked" : "unchecked"
              }
              onPress={() => setequipChecked("sinal de wifi não desaparece dos seus dispositivos,")}
            />
          </View>
          <View style={{}}>
            <Text style={{ paddingLeft: 5 }}>Sim </Text>
            <RadioButton
              value="sinal de wifi desaparece dos seus dispositivos,"
              status={
                equipChecked === "sinal de wifi desaparece dos seus dispositivos," ? "checked" : "unchecked"
              }
              onPress={() => setequipChecked("sinal de wifi desaparece dos seus dispositivos,")}
            />
          </View>
        </View>
      </View>

      <Divider />

      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5 }}>
            A oscilação ocorre em somente dispositivos via Wi-Fi?
          </Text>
        </View>
        <View style={styles.radio}>
          <View style={{ paddingLeft: 5 }}>
            <Text style={{}}> Não</Text>
            <RadioButton
              value="oscilação ocorre em dispositivos conectados via wifi e cabeado"
              status={onlyWifi === "oscilação ocorre em dispositivos conectados via wifi e cabeado" ? "checked" : "unchecked"}
              onPress={() => setonlyWifi("oscilação ocorre em dispositivos conectados via wifi e cabeado")}
            />
          </View>
          <View style={{}}>
            <Text style={{ paddingLeft: 5 }}>Sim </Text>
            <RadioButton
              value="oscilação ocorre somente em dispositivos conectados via wifi"
              status={onlyWifi === "oscilação ocorre somente em dispositivos conectados via wifi" ? "checked" : "unchecked"}
              onPress={() => setonlyWifi("oscilação ocorre somente em dispositivos conectados via wifi")}
            />
          </View>
        </View>
      </View>
      <Divider />
      <Button
        style={{ marginTop: 8 }}
        mode="contained"
        onPress={() => !alert("Cliente informa oscilações em sua rede, "+equipChecked + " " + onlyWifi)}
      >
        Avançar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    padding: 4,
    alignContent: "center",
    justifyContent: "center",
  },
  containerBox: {
    flexDirection: "row",
    backgroundColor: "#ecf0f1",
    padding: 2,
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    flex: 1,
    alignSelf: "center",
  },
  radio: {
    borderLeftWidth: 1,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
  },
});
