import React, { useContext} from "react";
import { Text, View, StyleSheet } from "react-native";

import { RadioButton, Button, Divider } from "react-native-paper";
import AuthContext from "../../../../context/auth"


export default function NoConection(){
  const [equipChecked, setequipChecked] = React.useState("");
  const [ledChecked, setledChecked] = React.useState("");
  const { user } = useContext(AuthContext);
 
  if (user.obs.indexOf("OLT") > -1) {
    user.fibra= true
  }


  if(!user.fibra){
  return (
    <View style={{}}>
      <View style={styles.container}>
        <View style={styles.containerBox}>
          <View style={styles.text}>
            <Text style={{ marginLeft: 5, marginRight: 5 }}>
              Os equipamentos estão ligados?
            </Text>
          </View>
          <View style={styles.radio}>
            <View style={{ borderLeftWidth: 1, paddingLeft: 5 }}>
              <Text style={{ paddingRight: 5 }}> Não</Text>
              <RadioButton
                value="seus equipamentos estão desligados"
                status={equipChecked === "seus equipamentos estão desligados" ? "checked" : "unchecked"}
                onPress={() => setequipChecked("seus equipamentos estão desligados")}
              />
            </View>
            <View>
              <Text style={{ paddingLeft: 5 }}>Sim </Text>
              <RadioButton
                value="seus equipamentos estão ligados"
                status={equipChecked === "seus equipamentos estão ligados" ? "checked" : "unchecked"}
                onPress={() => setequipChecked("seus equipamentos estão ligados")}
              />
            </View>
          </View>
        </View>
        <Divider />

        <View style={styles.containerBox}>
          <View style={styles.text}>
            <Text style={{ marginLeft: 5 }}>
            Tem algum cabo na entrada WAN, Internet ou @ no seu Roteador?
            </Text>
          </View>
          <View style={styles.radio}>
            <View style={{ borderLeftWidth: 1, paddingLeft: 5 }}>
              <Text style={{}}> Não</Text>
              <RadioButton
                value="não tem cabo ethernet na entrada WAN"
                status={ledChecked === "não tem cabo ethernet na entrada WAN" ? "checked" : "unchecked"}
                onPress={() => setledChecked("não tem cabo ethernet na entrada WAN")}
              />
            </View>
            <View>
              <Text style={{ paddingLeft: 5 }}>Sim </Text>
              <RadioButton
                value="cabeamento está correto"
                status={ledChecked === "cabeamento está correto" ? "checked" : "unchecked"}
                onPress={() => setledChecked("cabeamento está correto")}
              />
            </View>
          </View>
        </View>
        <Divider />

        <Button
          style={{ marginTop: 5 }}
          mode="contained"
          onPress={() => !alert(equipChecked + " " + ledChecked)}
        >
          Avançar
        </Button>
      </View>
    </View>
  );
  }else{
return (
    <View style={{}}>
      <View style={styles.container}>
        <View style={styles.containerBox}>
          <View style={styles.text}>
            <Text style={{ marginLeft: 5, marginRight: 5 }}>
              Os equipamentos estão ligados?
            </Text>
          </View>
          <View style={styles.radio}>
            <View style={{ borderLeftWidth: 1, paddingLeft: 5 }}>
              <Text style={{ paddingRight: 5 }}> Não</Text>
              <RadioButton
                value="seus equipamentos estão desligados"
                status={equipChecked === "seus equipamentos estão desligados" ? "checked" : "unchecked"}
                onPress={() => setequipChecked("seus equipamentos estão desligados")}
              />
            </View>
            <View>
              <Text style={{ paddingLeft: 5 }}>Sim </Text>
              <RadioButton
                value="seus equipamentos estão ligados"
                status={equipChecked === "seus equipamentos estão ligados" ? "checked" : "unchecked"}
                onPress={() => setequipChecked("seus equipamentos estão ligados")}
              />
            </View>
          </View>
        </View>
        <Divider />

        <View style={styles.containerBox}>
          <View style={styles.text}>
            <Text style={{ marginLeft: 5 }}>
              O LED Link ou PON estão acesos?
            </Text>
          </View>
          <View style={styles.radio}>
            <View style={{ borderLeftWidth: 1, paddingLeft: 5 }}>
              <Text style={{}}> Não</Text>
              <RadioButton
                value="LED PON ou LINK apagados"
                status={ledChecked === "LED PON ou LINK apagados" ? "checked" : "unchecked"}
                onPress={() => setledChecked("LED PON ou LINK apagados")}
              />
            </View>
            <View>
              <Text style={{ paddingLeft: 5 }}>Sim </Text>
              <RadioButton
                value="LED PON ou LINK acesos"
                status={ledChecked === "LED PON ou LINK acesos" ? "checked" : "unchecked"}
                onPress={() => setledChecked("LED PON ou LINK acesos")}
              />
            </View>
          </View>
        </View>
        <Divider />

        <Button
          style={{ marginTop: 5 }}
          mode="contained"
          onPress={() => !alert("Cliente informa sem conexão " + equipChecked + " e " + ledChecked)}
        >
          Avançar
        </Button>
      </View>
    </View>
  );
  }
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
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    width:0,
    alignSelf: "center",
    flex: 1,
    flexGrow: 1,
  },
  radio: {
    flexDirection: "row",
  },
});
