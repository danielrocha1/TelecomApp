import { Text, View } from "react-native";

export default ViewNotif = (props) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 1.5,
        borderRadius: 9,
        marginTop: 15,
        marginBottom: 5,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          marginRight: "30%",
          marginLeft: "35%",
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          marginLeft: 5,
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Mensagem: {props.body}
      </Text>

      <View style={{ flexDirection: "row", marginLeft: 5 }}>
        <View style={{ justifyContent: "flex-start" }}>
          <Text style={{ fontSize: 18 }}>Data: {props.data}</Text>
        </View>
      </View>
    </View>
  );
};
