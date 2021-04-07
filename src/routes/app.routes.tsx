import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QrScan from "../pages/QrScan";
import Start from "../pages/Start";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="QrScan" component={QrScan} />
      <AppStack.Screen name="Start" component={Start} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
