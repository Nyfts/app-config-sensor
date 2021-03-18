import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AuthProvider from "./contexts/auth";

import Application from "./Application";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar translucent />
        <Application />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
