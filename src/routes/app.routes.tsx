import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QrScan from "../pages/QrScan";
import Start from "../pages/Start";

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
        name="Start"
        component={Start}
        options={{ title: "Inicio", headerLeft: null }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
