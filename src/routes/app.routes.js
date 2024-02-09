import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserProfile from "../pages/UserProfile";

import Suporte from "../pages/Suporte";
import Faturas from "../pages/Faturas";
import CallAtendente from "../pages/Atendente";
import Configuration from "../pages/Configuracoes";
import Notificacoes from "../pages/Notificacoes";


import NoConection from "../pages/Suporte/Forms/NoConection";
import Oscilation from "../pages/Suporte/Forms/Oscilation";
import TelecomAppPlay from "../pages/Suporte/Forms/TelecomAppPlay";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator initialRouteName="Bem-vindo Daniel">
      <AppStack.Screen
        name="Início"
        component={UserProfile}
        options={{ title: "Início",
        headerStyle: {
            backgroundColor: '#0083CD',
          },
          headerTintColor: 'white', }}
      />
      <AppStack.Screen
        name="Notificacoes"
        component={Notificacoes}
        options={{
          title: "Notificações",
          headerStyle: {
            backgroundColor: '#0083CD',
          },
          headerTintColor: 'white',
        }}
      />
      <AppStack.Screen
        name="Faturas"
        component={Faturas}
        options={{
          title: "Faturas",
          headerStyle: {
            backgroundColor: '#0083CD',
          },
          headerTintColor: 'white',
        }}
      />
      <AppStack.Screen
        name="Support"
        component={Suporte}
        options={{
          title: "Suporte Técnico",
          headerStyle: {
            backgroundColor: '#0083CD',
          },
          headerTintColor: 'white',
        }}
      />
      <AppStack.Screen
        name="CallAtendente"
        component={CallAtendente}
        options={{
          title: "Falar com Atendente",
        }}
      />
      <AppStack.Screen
        name="Configuracoes"
        component={Configuration}
        options={{
          title: "Configurações",
          headerStyle: {
            backgroundColor: '#0083CD',
          },
          headerTintColor: 'white',
        }}
      />
      <AppStack.Screen
        name="noConection"
        component={NoConection}
        options={{
          title: "Sem Conexão",
          headerStyle: {
            backgroundColor: '#0083CD',
          },
          headerTintColor: 'white',
        }}
      />
      <AppStack.Screen
        name="Oscilando"
        component={Oscilation}
        options={{
          title: "Conexão Oscilando",
          headerStyle: {
            backgroundColor: '#0083CD',
          },
          headerTintColor: 'white',
        }}
      />
      <AppStack.Screen
        name="TelecomAppPlay"
        component={TelecomAppPlay}
        options={{
          title: "Serviços Digitais",
          headerStyle: {
            backgroundColor: '#0083CD',
          },
          headerTintColor: 'white',
        }}
      />
      <AppStack.Screen name="UserProfile" component={UserProfile} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;

