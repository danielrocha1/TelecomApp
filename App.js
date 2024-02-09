
import React, { useEffect, useState } from "react";

import UserProfile from "./src/pages/Login";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Routes from "./src/routes";
import {AuthProvider} from "./src/context/auth";

const Stack = createNativeStackNavigator();

function App() {
  // const [expoPushToken, setExpoPushToken] = useState("");
  // registerForPushNotificationsAsync().then((token) =>{
  //      setExpoPushToken(token)
  //      console.log(token)
  //     }
  //    );
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
        // <Stack.Screen
        //   name="Início"
        //   component={UserProfile}

        //   options={{header: () => null,
        //     title: "Início",
        //   }}
        // />
        // <Stack.Screen
        //   name="Notificacoes"
        //   component={Notificacoes}
        //   options={{
        //     title: "Notificações",
        //   }}
        // />
        // <Stack.Screen
        //   name="Faturas"
        //   component={Faturas}
        //   options={{
        //     title: "Faturas",
        //   }}
        // />
        // <Stack.Screen
        //   name="Support"
        //   component={Suporte}
        //   options={{
        //     title: "Suporte Técnico",
        //   }}
        // />
        // <Stack.Screen
        //   name="CallAtendente"
        //   component={CallAtendente}
        //   options={{
        //     title: "Falar com Atendente",
        //   }}
        // />
        // <Stack.Screen
        //   name="Configuracoes"
        //   component={Configuration}
        //   options={{
        //     title: "Configurações",
        //   }}
        // />
        // <Stack.Screen
        //   name="noConection"
        //   component={NoConection}
        //   options={{
        //     title: "Sem Conexão",
        //   }}
        // />
        // <Stack.Screen
        //   name="Oscilando"
        //   component={Oscilation}
        //   options={{
        //     title: "Conexão Oscilando",
        //   }}
        // />
        // <Stack.Screen
        //   name="Paramount"
        //   component={Paramount}
        //   options={{
        //     title: "Serviços Digitais",
        //   }}
        // />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
