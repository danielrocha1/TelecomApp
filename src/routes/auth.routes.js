import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
  <AuthStack.Navigator>
    <AuthStack.Screen
           name="Início"
           component={Login}
           options={{header: () => null,
             title: "Início",
           }}
         />
  </AuthStack.Navigator>
  )
};

export default AuthRoutes;
