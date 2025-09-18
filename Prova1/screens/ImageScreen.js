import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

const ImageScreen = ({ navigation }) => {
  const imageUrl = 'https://felipemartinssilva66.wordpress.com/wp-content/uploads/2013/05/sei-la.jpg?w=640'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela da Imagem da Internet</Text>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Button title="Voltar para Início" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    gap: 10
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20
  }
})

export default ImageScreen
