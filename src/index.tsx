import React from "react";
import { registerRootComponent } from "expo";
import Login from "./pages/Login";

const App: React.FC = () => {
  return <Login />;
};

export default registerRootComponent(App);
