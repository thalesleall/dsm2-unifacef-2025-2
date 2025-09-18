import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'

const IconsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela dos Ícones</Text>
      <View style={styles.iconRow}>
        <FontAwesome name="star" size={50} color="gold" />
        <MaterialIcons name="local-fire-department" size={50} color="red" />
        <Ionicons name="heart" size={50} color="pink" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0FFFF'
  },
  title: {
    fontSize: 20,
    marginBottom: 30
  },
  iconRow: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default IconsScreen
