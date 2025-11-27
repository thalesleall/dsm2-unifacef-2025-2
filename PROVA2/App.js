import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import MeusCompromissosScreen from "./screens/MeusCompromissosScreen";
import CompromissosEquipeScreen from "./screens/CompromissosEquipeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Página Inicial" }}
        />
        <Stack.Screen
          name="MeusCompromissos"
          component={MeusCompromissosScreen}
          options={{ title: "Meus Compromissos" }}
        />
        <Stack.Screen
          name="CompromissosEquipe"
          component={CompromissosEquipeScreen}
          options={{ title: "Compromissos da Equipe" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
