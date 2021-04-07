import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QrScan from "../pages/QrScan";
import Menu from "../pages/Menu";
import Form from "../pages/Form";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="QrScan"
        component={QrScan}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Menu"
        component={Menu}
        options={{ title: "Inicio", headerLeft: null }}
      />
      <AppStack.Screen
        name="Form"
        component={Form}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
