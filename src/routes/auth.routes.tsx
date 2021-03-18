import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Loading from "../pages/Loading";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Loading" component={Loading} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
