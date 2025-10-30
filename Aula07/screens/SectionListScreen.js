import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

const DATA = [
  {
    title: '🍎 Frutas',
    data: [
      { id: '1', name: 'Maçã', price: 'R$ 4,50/kg', description: 'Maçãs frescas e crocantes' },
      { id: '2', name: 'Banana', price: 'R$ 3,20/kg', description: 'Bananas maduras' },
      { id: '3', name: 'Laranja', price: 'R$ 2,80/kg', description: 'Laranjas suculentas' },
      { id: '4', name: 'Uva', price: 'R$ 8,90/kg', description: 'Uvas sem sementes' },
    ],
  },
  {
    title: '🥬 Vegetais',
    data: [
      { id: '5', name: 'Alface', price: 'R$ 2,50/un', description: 'Alface orgânica' },
      { id: '6', name: 'Tomate', price: 'R$ 5,60/kg', description: 'Tomates frescos' },
      { id: '7', name: 'Cenoura', price: 'R$ 3,40/kg', description: 'Cenouras crocantes' },
      { id: '8', name: 'Brócolis', price: 'R$ 6,90/kg', description: 'Brócolis verde' },
    ],
  },
  {
    title: '🥛 Laticínios',
    data: [
      { id: '9', name: 'Leite', price: 'R$ 4,50/L', description: 'Leite integral' },
      { id: '10', name: 'Queijo', price: 'R$ 35,00/kg', description: 'Queijo minas' },
      { id: '11', name: 'Iogurte', price: 'R$ 3,80/un', description: 'Iogurte natural' },
      { id: '12', name: 'Manteiga', price: 'R$ 12,90/un', description: 'Manteiga com sal' },
    ],
  },
  {
    title: '🍖 Carnes',
    data: [
      { id: '13', name: 'Frango', price: 'R$ 18,90/kg', description: 'Peito de frango' },
      { id: '14', name: 'Carne Bovina', price: 'R$ 42,00/kg', description: 'Alcatra' },
      { id: '15', name: 'Peixe', price: 'R$ 28,50/kg', description: 'Salmão fresco' },
      { id: '16', name: 'Porco', price: 'R$ 22,00/kg', description: 'Lombo suíno' },
    ],
  },
  {
    title: '🍞 Padaria',
    data: [
      { id: '17', name: 'Pão Francês', price: 'R$ 12,00/kg', description: 'Pão quentinho' },
      { id: '18', name: 'Pão de Forma', price: 'R$ 8,50/un', description: 'Pão integral' },
      { id: '19', name: 'Bolo', price: 'R$ 25,00/un', description: 'Bolo de chocolate' },
      { id: '20', name: 'Croissant', price: 'R$ 6,50/un', description: 'Croissant francês' },
    ],
  },
];

export default function SectionListScreen() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (title) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderSectionHeader = ({ section: { title } }) => {
    const isExpanded = expandedSections[title] !== false;
    
    return (
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => toggleSection(title)}
        activeOpacity={0.7}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionArrow}>
          {isExpanded ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, section }) => {
    const isExpanded = expandedSections[section.title] !== false;
    
    if (!isExpanded) return null;

    return (
      <TouchableOpacity style={styles.item} activeOpacity={0.7}>
        <View style={styles.itemContent}>
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
          <View style={styles.itemPriceContainer}>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
    </TouchableOpacity>
  );
  };

  const renderSectionFooter = ({ section }) => {
    const isExpanded = expandedSections[section.title] !== false;    if (!isExpanded) return null;

    return (
      <View style={styles.sectionFooter}>
        <Text style={styles.sectionFooterText}>
          {section.data.length} {section.data.length === 1 ? 'item' : 'itens'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Supermercado</Text>
        <Text style={styles.headerSubtitle}>
          Produtos organizados por categoria
        </Text>
      </View>

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    paddingTop: 60,
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
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
    marginTop: 5,
  },
  listContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionArrow: {
    fontSize: 16,
    color: '#4CAF50',
  },
  sectionFooter: {
    backgroundColor: '#e8f5e9',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionFooterText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '600',
  },
  item: {
    backgroundColor: '#fff',
    marginHorizontal: isTablet ? 20 : 0,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  itemInfo: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPriceContainer: {
    alignItems: 'flex-end',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});
