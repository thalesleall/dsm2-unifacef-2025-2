import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CameraScreen() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cameraRef = useRef(null);

  if (!permission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionIcon}>📷</Text>
          <Text style={styles.permissionTitle}>Acesso à Câmera</Text>
          <Text style={styles.permissionMessage}>
            Precisamos de permissão para usar a câmera
          </Text>
          <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
            <Text style={styles.permissionButtonText}>Permitir Acesso</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        setIsLoading(true);
        const options = {
          quality: 0.8,
          base64: false,
          exif: false,
        };
        
        const data = await cameraRef.current.takePictureAsync(options);
        setPhoto(data.uri);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        Alert.alert('Erro', 'Não foi possível tirar a foto');
        console.error(error);
      }
    }
  };

  const savePhoto = async () => {
    if (!photo) return;

    try {
      if (!mediaPermission?.granted) {
        const { granted } = await requestMediaPermission();
        if (!granted) {
          Alert.alert('Erro', 'Precisamos de permissão para salvar a foto na galeria');
          return;
        }
      }

      await MediaLibrary.createAssetAsync(photo);
      Alert.alert('Sucesso!', 'Foto salva na galeria', [
        { text: 'OK', onPress: () => setPhoto(null) }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a foto');
      console.error(error);
    }
  };

  const discardPhoto = () => {
    setPhoto(null);
  };

  if (photo) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: photo }} style={styles.preview} />
        <View style={styles.previewActions}>
          <TouchableOpacity style={styles.discardButton} onPress={discardPhoto}>
            <Text style={styles.buttonIcon}>🗑️</Text>
            <Text style={styles.buttonText}>Descartar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={savePhoto}>
            <Text style={styles.buttonIcon}>💾</Text>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.cameraHeader}>
          <Text style={styles.cameraTitle}>Câmera</Text>
        </View>

        <View style={styles.cameraControls}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <Text style={styles.flipIcon}>🔄</Text>
            <Text style={styles.flipText}>Virar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.captureButton}
            onPress={takePicture}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <View style={styles.captureButtonInner} />
            )}
          </TouchableOpacity>

          <View style={styles.placeholder} />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  permissionIcon: {
    fontSize: 80,
    marginBottom: 20,
  },
  permissionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  permissionMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  permissionButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  permissionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  camera: {
    flex: 1,
  },
  cameraHeader: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cameraTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cameraControls: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  flipButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
    padding: 15,
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  flipIcon: {
    fontSize: 30,
  },
  flipText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 5,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  placeholder: {
    width: 80,
  },
  preview: {
    flex: 1,
    resizeMode: 'contain',
  },
  previewActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#000',
  },
  discardButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ff3b30',
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#34c759',
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
  },
  buttonIcon: {
    fontSize: 30,
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
