import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Process from "../pages/FormRoutes/Process";

const AppStack = createStackNavigator();

const FormRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Process"
        component={Process}
        options={{ headerShown: true }}
      />
    </AppStack.Navigator>
  );
};

export default FormRoutes;
