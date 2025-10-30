import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';

export default function ResponsiveScreen() {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const { width, height } = dimensions;
  const isPortrait = height > width;
  const isSmallDevice = width < 375;
  const isMediumDevice = width >= 375 && width < 768;
  const isLargeDevice = width >= 768;

  const responsiveStyles = {
    containerPadding: isLargeDevice ? 40 : isMediumDevice ? 20 : 15,
    titleSize: isLargeDevice ? 32 : isMediumDevice ? 24 : 20,
    cardSize: isLargeDevice ? width / 4 - 40 : isMediumDevice ? width / 2 - 30 : width - 30,
    columns: isLargeDevice ? 4 : isMediumDevice ? 2 : 1,
  };

  const cards = [
    { id: 1, title: 'Card 1', color: '#FF6B6B', icon: '📱' },
    { id: 2, title: 'Card 2', color: '#4ECDC4', icon: '💻' },
    { id: 3, title: 'Card 3', color: '#45B7D1', icon: '⌚' },
    { id: 4, title: 'Card 4', color: '#FFA07A', icon: '🖥️' },
    { id: 5, title: 'Card 5', color: '#98D8C8', icon: '📟' },
    { id: 6, title: 'Card 6', color: '#F7B731', icon: '🎮' },
    { id: 7, title: 'Card 7', color: '#5F27CD', icon: '🎧' },
    { id: 8, title: 'Card 8', color: '#00D2D3', icon: '⌨️' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { padding: responsiveStyles.containerPadding }]}>
        <Text style={[styles.title, { fontSize: responsiveStyles.titleSize }]}>
          Layout Responsivo
        </Text>
        <Text style={styles.subtitle}>
          {Platform.OS === 'ios' ? '🍎 iOS' : Platform.OS === 'android' ? '🤖 Android' : '🌐 Web'}
        </Text>
      </View>

      {/* Informações do dispositivo */}
      <View style={[styles.infoCard, { margin: responsiveStyles.containerPadding }]}>
        <Text style={styles.infoTitle}>📐 Informações do Dispositivo</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Largura:</Text>
          <Text style={styles.infoValue}>{width.toFixed(0)}px</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Altura:</Text>
          <Text style={styles.infoValue}>{height.toFixed(0)}px</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Orientação:</Text>
          <Text style={styles.infoValue}>{isPortrait ? 'Retrato 📱' : 'Paisagem 📲'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tamanho:</Text>
          <Text style={styles.infoValue}>
            {isSmallDevice ? 'Pequeno' : isMediumDevice ? 'Médio' : 'Grande (Tablet)'}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Colunas:</Text>
          <Text style={styles.infoValue}>{responsiveStyles.columns}</Text>
        </View>
      </View>

      {/* Grid responsivo */}
      <Text style={[styles.sectionTitle, { paddingHorizontal: responsiveStyles.containerPadding }]}>
        Grid Responsivo
      </Text>
      <View
        style={[
          styles.gridContainer,
          {
            padding: responsiveStyles.containerPadding,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: isLargeDevice ? 'flex-start' : 'space-around',
          },
        ]}
      >
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              {
                width: responsiveStyles.cardSize,
                height: responsiveStyles.cardSize,
                backgroundColor: card.color,
                marginBottom: 15,
                marginHorizontal: isLargeDevice ? 10 : 0,
              },
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.cardIcon}>{card.icon}</Text>
            <Text style={styles.cardTitle}>{card.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Breakpoints */}
      <View style={[styles.breakpointsCard, { margin: responsiveStyles.containerPadding }]}>
        <Text style={styles.infoTitle}>📊 Breakpoints</Text>
        <View style={styles.breakpointItem}>
          <View style={[styles.breakpointDot, { backgroundColor: isSmallDevice ? '#4CAF50' : '#ccc' }]} />
          <Text style={styles.breakpointText}>Pequeno (&lt; 375px)</Text>
        </View>
        <View style={styles.breakpointItem}>
          <View style={[styles.breakpointDot, { backgroundColor: isMediumDevice ? '#4CAF50' : '#ccc' }]} />
          <Text style={styles.breakpointText}>Médio (375px - 768px)</Text>
        </View>
        <View style={styles.breakpointItem}>
          <View style={[styles.breakpointDot, { backgroundColor: isLargeDevice ? '#4CAF50' : '#ccc' }]} />
          <Text style={styles.breakpointText}>Grande (≥ 768px)</Text>
        </View>
      </View>

      {/* Demonstração de espaçamento responsivo */}
      <View style={[styles.spacingDemo, { padding: responsiveStyles.containerPadding }]}>
        <Text style={styles.infoTitle}>📏 Espaçamento Responsivo</Text>
        <View style={[styles.spacingBox, { padding: responsiveStyles.containerPadding }]}>
          <Text style={styles.spacingText}>
            Este padding se ajusta automaticamente: {responsiveStyles.containerPadding}px
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6C63FF',
    paddingTop: 60,
    paddingBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
  },
  gridContainer: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  breakpointsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  breakpointItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  breakpointDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 15,
  },
  breakpointText: {
    fontSize: 16,
    color: '#333',
  },
  spacingDemo: {
    marginBottom: 30,
  },
  spacingBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6C63FF',
    borderStyle: 'dashed',
  },
  spacingText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
