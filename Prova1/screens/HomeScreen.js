import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thales Vinícius Leal Barcelos -</Text>
      <Button title="Ir para Tela da Imagem Web" onPress={() => navigation.navigate('Image')} />
      <Button title="Ir para Tela da Imagem Local" onPress={() => navigation.navigate('LocalImage')} />
      <Button title="Ir para Tela dos Icones" onPress={() => navigation.navigate('Icons')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
})

export default HomeScreen
