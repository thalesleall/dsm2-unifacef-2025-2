import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GaleriaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="camera" size={40} color="#007AFF" />
        <Text style={styles.headerText}>Galeria</Text>
      </View>
      <View style={styles.imagesRow}>
        <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }} />
        <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }} />
        <Image style={styles.image} source={{ uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, justifyContent: 'center' },
  headerText: { fontSize: 24, marginLeft: 10, fontWeight: 'bold' },
  imagesRow: { flexDirection: 'row', justifyContent: 'space-around' },
  image: { width: 100, height: 100, borderRadius: 10 },
});
