import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import ImageScreen from './screens/ImageScreen'
import LocalImageScreen from './screens/ImagemLocalScreen'
import IconsScreen from './screens/IconesScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Image" component={ImageScreen} options={{ title: 'Imagem da Web' }} />
        <Stack.Screen name="LocalImage" component={LocalImageScreen} options={{ title: 'Imagem Local' }} />
        <Stack.Screen name="Icons" component={IconsScreen} options={{ title: 'Meus Ícones' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
