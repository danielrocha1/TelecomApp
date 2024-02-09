import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RadioButton, Button, Divider } from "react-native-paper";


export default function SupportForm({ navigation }){
  const [checked, setChecked] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5 }}>Estou sem conexão</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton
            value="noConection"
            status={checked === "noConection" ? "checked" : "unchecked"}
            onPress={() => setChecked("noConection")}
          />
        </View>
      </View>
      <Divider />
      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5 }}>Minha internet está oscilando</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton
            value="Oscilando"
            status={checked === "Oscilando" ? "checked" : "unchecked"}
            onPress={() => setChecked("Oscilando")}
          />
        </View>
      </View>
      <Divider />
      <View style={styles.containerBox}>
        <View style={styles.text}>
          <Text style={{ marginLeft: 5 }}>
            Serviços Digitais
          </Text>
        </View>
        <View style={styles.radio}>
          <RadioButton
            value=""
            status={checked === "" ? "checked" : "unchecked"}
            onPress={() => setChecked("")}
          />
        </View>
      </View>
      <Divider />
      <Button
        style={{ }}
        mode="contained"
        onPress={() => navigation.navigate(checked)}
      >
        Avançar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",

    backgroundColor: "#ecf0f1",
    padding: 4,
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  containerBox: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",

    backgroundColor: "#ecf0f1",
    padding: 2,
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    flex: 1,
    alignSelf: "center",
    flexWrap: "wrap",
  },
  radio: {
    borderLeftWidth: 2,
  },
});
