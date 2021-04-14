import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Process from "../pages/FormRoutes/Process";
import Acionamento from "../pages/FormRoutes/Acionamento";

const AppStack = createStackNavigator();

const FormRoutes: React.FC = () => {
return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Process"
        component={Process}
        options={{ headerShown: true, title: 'Processo - Parte 1 de 6' }}
      />
      <AppStack.Screen
        name="Acionamento"
        component={Acionamento}
        options={{ headerShown: true, title: 'Acionamento - Parte 2 de 6' }}
      />
    </AppStack.Navigator>
  );
};

export default FormRoutes;
