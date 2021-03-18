import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import QrScan from "../pages/QrScan";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name="QrScan" component={QrScan} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
