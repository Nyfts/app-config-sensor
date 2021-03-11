import React from "react";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import Login from "./Login";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Login />
    </>
  );
};

export default registerRootComponent(App);
