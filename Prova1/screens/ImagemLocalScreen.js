import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const localImage = require('../assets/paisagemfoda.jpg')

const LocalImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela da Imagem Local</Text>
      <Image source={localImage} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3'
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  }
})

export default LocalImageScreen
