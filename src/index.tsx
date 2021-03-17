import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import AuthProvider from "./contexts/auth";

import Application from "./Application";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Application />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
