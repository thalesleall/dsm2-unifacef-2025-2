import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function GalleryScreen() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickSingleImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Erro', 'Precisamos de permissão para acessar a galeria');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const pickMultipleImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Erro', 'Precisamos de permissão para acessar a galeria');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = result.assets.map(asset => asset.uri);
      setImages([...images, ...newImages]);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Erro', 'Precisamos de permissão para usar a câmera');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const clearImages = () => {
    Alert.alert(
      'Limpar Galeria',
      'Deseja remover todas as imagens?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Limpar',
          style: 'destructive',
          onPress: () => {
            setImages([]);
            setSelectedImage(null);
          }
        }
      ]
    );
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Galeria de Fotos</Text>
        <Text style={styles.headerSubtitle}>
          {images.length} {images.length === 1 ? 'foto' : 'fotos'}
        </Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {selectedImage && (
          <View style={styles.selectedImageContainer}>
            <Text style={styles.sectionTitle}>Imagem Selecionada</Text>
            <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
            <TouchableOpacity
              style={styles.removeSelectedButton}
              onPress={() => setSelectedImage(null)}
            >
              <Text style={styles.removeSelectedButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={pickSingleImage}>
            <Text style={styles.actionIcon}>🖼️</Text>
            <Text style={styles.actionText}>Escolher Foto</Text>
            <Text style={styles.actionSubtext}>Uma imagem</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={pickMultipleImages}>
            <Text style={styles.actionIcon}>📚</Text>
            <Text style={styles.actionText}>Múltiplas Fotos</Text>
            <Text style={styles.actionSubtext}>Várias imagens</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={takePhoto}>
            <Text style={styles.actionIcon}>📸</Text>
            <Text style={styles.actionText}>Tirar Foto</Text>
            <Text style={styles.actionSubtext}>Usar câmera</Text>
          </TouchableOpacity>
        </View>

        {images.length > 0 && (
          <>
            <View style={styles.galleryHeader}>
              <Text style={styles.sectionTitle}>Galeria</Text>
              <TouchableOpacity onPress={clearImages}>
                <Text style={styles.clearText}>Limpar Tudo</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imageGrid}>
              {images.map((uri, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={{ uri }} style={styles.gridImage} />
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeImage(index)}
                  >
                    <Text style={styles.removeButtonText}>✕</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </>
        )}

        {images.length === 0 && !selectedImage && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📷</Text>
            <Text style={styles.emptyText}>Nenhuma foto selecionada</Text>
            <Text style={styles.emptySubtext}>
              Use os botões acima para escolher ou tirar fotos
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#8B5CF6',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
    marginTop: 5,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  selectedImageContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  selectedImage: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
  },
  removeSelectedButton: {
    backgroundColor: '#ff3b30',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  removeSelectedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  actionSubtext: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  galleryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  clearText: {
    color: '#ff3b30',
    fontSize: 16,
    fontWeight: '600',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
  },
  imageContainer: {
    width: '48%',
    marginHorizontal: '1%',
    marginBottom: 10,
    position: 'relative',
  },
  gridImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 59, 48, 0.9)',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
