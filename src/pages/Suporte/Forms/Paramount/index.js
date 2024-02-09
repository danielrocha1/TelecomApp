import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { RadioButton, Divider, Button } from "react-native-paper";

export default function App() {
  const [equipChecked, setequipChecked] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5, marginRight: 5 }}>
            Erro de login ou senha?
          </Text>
        </View>
        <View style={styles.radio}>
          <View style={{}}>
            <RadioButton
              value="ErrorLogin"
              status={equipChecked === "ErrorLogin" ? "checked" : "unchecked"}
              onPress={() => setequipChecked("ErrorLogin")}
            />
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5, marginRight: 5 }}>
            Apresenta mensagem de erro: "Usuário não encontrado"
          </Text>
        </View>
        <View style={styles.radio}>
          <View style={{}}>
            <RadioButton
              value="userNotFound"
              status={equipChecked === "userNotFound" ? "checked" : "unchecked"}
              onPress={() => setequipChecked("userNotFound")}
            />
          </View>
        </View>
      </View>

      <Divider />

      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5 }}>
            Apresenta mensagem de erro: "Ocorreu um erro na autenticação do
            parceiro"
          </Text>
        </View>
        <View style={styles.radio}>
          <View style={{}}>
            <RadioButton
              value="partnerAuth"
              status={equipChecked === "partnerAuth" ? "checked" : "unchecked"}
              onPress={() => setequipChecked("partnerAuth")}
            />
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5, marginRight: 5 }}>Outros assuntos</Text>
        </View>
        <View style={styles.radio}>
          <View style={{}}>
            <RadioButton
              value="others"
              status={equipChecked === "others" ? "checked" : "unchecked"}
              onPress={() => setequipChecked("others")}
            />
          </View>
        </View>
      </View>
      <Divider />

      <Button
        style={{ marginTop: 8 }}
        mode="contained"
        onPress={() => !alert(equipChecked)}
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
