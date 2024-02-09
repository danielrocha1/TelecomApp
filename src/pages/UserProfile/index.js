import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  Linking,
} from "react-native";
import {
  Title,
  Caption,
  Text,
  TouchableRipple,
  
} from "react-native-paper";
import AuthContext from "../../context/auth";
import ChangeEndereco from "../../components/Endereco"

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const UserProfile = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  var userPlano = user.plano.replace(/\D/g, "");
  
  bairro = user.complemento.split(" ")
  var composto = bairro[0]
  if (bairro[0] == "SÃO" || "PARQUE" || "PONTA"){
   composto = bairro[0] + " " + bairro[1]
  }
  
  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        
        <TouchableRipple onPress={() => navigation.navigate("Notificacoes")} >
          <View>
                <Icon name="bell" color="#FFF" size={28} /> 
                <View style={{alignItems:"center", justifyContent:"center", width:12, height:12,marginLeft:18, bottom:26, backgroundColor:"#e56c22", borderRadius:10, opacity:0}}/>
          </View>
        </TouchableRipple>
        
      ),
    });
  }, [navigation]);
  

  return (
   <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0083CD" />
<View style={styles.container}>
      <View style={{}}>
        <View style={[styles.userInfoSection, {}]}>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={{ marginLeft: 5, marginBottom: 5 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 10,
                  },
                ]}
              >
                {user.nome}
              </Title>
              <Caption style={[styles.caption, {}]}>
                Data de nascimento: {user.nascimento}
              </Caption>
            </View>
          </View>
        </View>
        <View style={{}}>
          <View style={[styles.userInfoSection, { height: 110 }]}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" size={20} />
              <Text style={{ marginLeft: 10, fontSize:13 }}>
                {user.endereco} - {composto}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" size={20} />
              <Text style={{ marginLeft: 10 }}>{user.telefone}</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" size={20} />
              <Text style={{ marginLeft: 10 }}>{user.email.toLowerCase()}</Text>
            </View>

            <View style={styles.row}>
              <Icon name="antenna" size={20} />
              <Text style={{ marginLeft: 10,}}>Serviços Digitais:</Text>
               <Text style={{ marginLeft: 10, color:"blue", fontWeight:"700"}}>Ativado</Text>
            </View>
          </View>
          
          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  backgroundColor: "#0083CD",
                  borderRightColor: "#dddddd",
                  borderRightWidth: 1,
                },
              ]}
            >
              <Title style={{ fontWeight:"700", color: "white" }}>{userPlano} MEGA</Title>
              <Caption style={{  color: "white" }}>Plano Atual</Caption>
            </View>
            <View style={[styles.infoBox, { backgroundColor: "#0083CD" }]}>
              <Title style={{ fontWeight:"700", color: "white" }}>{user.valor}</Title>
              <Caption style={{ color: "white" }}>Valor</Caption>
            </View>
          </View>
        </View>
        
        <View style={[styles.menuWrapper, { height: "100%" }]}>
        <ScrollView>
          <TouchableRipple
            onPress={() => {
              navigation.navigate("Faturas");
            }}
            rippleColor="lightblue"
            style={{ marginLeft: 5, marginRight: 5 }}
          >
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#e56c22" size={25} />
              <Text style={styles.menuItemText}>Faturas</Text>
            </View>
          </TouchableRipple>

          <ChangeEndereco navigation={navigation} />
          
          <TouchableRipple
            onPress={() => {
              navigation.navigate("Support");
            }}
            rippleColor="lightblue"
            style={{  marginLeft: 5, marginRight: 5 }}
          >
            <View style={styles.menuItem}>
              <Icon name="account-check-outline" color="#e56c22" size={25} />
              <Text style={styles.menuItemText}>Suporte Técnico</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => {
              Linking.openURL(
                "https://api.whatsapp.com/send?phone=552126347700&text=Falar%20com%20Atendente"
              );
            }}
            rippleColor="lightblue"
            style={{ marginLeft: 5, marginRight: 5 }}
          >
            <View style={styles.menuItem}>
              <Icon name="account-tie-voice" color="#e56c22" size={25} />
              <Text style={styles.menuItemText}>Fale com um Atendente</Text>
            </View>
          </TouchableRipple>

          <TouchableRipple
            onPress={() => {
              navigation.navigate("Configuracoes");
            }}
            style={{ marginLeft: 5, marginRight: 5 }}
            rippleColor="lightblue"
          >
            <View style={styles.menuItem}>
              <Icon name="cog-outline" color="#e56c22" size={25} />
              <Text style={styles.menuItemText}>Mais opções</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => {
              setUser([]);
            }}
            rippleColor="lightblue"
            style={{marginLeft: 5, marginRight: 5 }}
          >
            <View style={styles.menuItem}>
              <Icon name="exit-to-app" color="#e56c22" size={25} />
              <Text style={styles.menuItemText}>Sair</Text>
            </View>
          </TouchableRipple>
        </ScrollView>
        </View>
      </View>
       </View>
      </SafeAreaView>
    
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container:{
    
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 95,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 5,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    marginBottom:100,
    
    
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 19,
    paddingHorizontal: 20,
    borderWidth:2,
    borderRadius:7,
    marginTop:1.5,
    marginBottom:2.2,
    borderColor:"#0083CD",
    
    
  },
  menuItemText: {
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  background: {
 
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    opacity:.15,
    height: "100%",
  
  },
});
