import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { RadioButton, Divider, Button } from "react-native-paper";

export default function App() {
  const [equipChecked, setequipChecked] = React.useState("");

  return (
    <View style={styles.container}>

      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5 }}>
            Gostaria de Ativar o  
          </Text>
        </View>
        <View style={styles.radio}>
          <View style={{}}>
            <RadioButton
              value="Desejo de ativar o "
              status={equipChecked === "Desejo de ativar o " ? "checked" : ""}
              onPress={() => setequipChecked("Desejo de ativar o ")}
            />
          </View>
        </View>
      </View>
      <Divider />
      
      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5, marginRight: 5 }}>
            Erro de login ou senha?
          </Text>
        </View>
        <View style={styles.radio}>
          <View style={{}}>
            <RadioButton
              value="erro de login ou senha"
              status={equipChecked === "erro de login ou senha" ? "checked" : "unchecked"}
              onPress={() => setequipChecked("erro de login ou senha")}
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
              value="mensagem de erro: Usuário não encontrado"
              status={equipChecked === "mensagem de erro: Usuário não encontrado" ? "checked" : "unchecked"}
              onPress={() => setequipChecked("mensagem de erro: Usuário não encontrado")}
            />
          </View>
        </View>
      </View>

      <Divider />


      <Button
        style={{ marginTop: 8 }}
        mode="contained"
        onPress={() => !alert("Cliente solicita informações sobre o , e informa " + equipChecked)}
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
