import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const compromissosEquipe = [
  {
    titulo: "Eu",
    data: [
      { id: "1", horario: "9h30", compromisso: 'Reunião "Daily"' },
      {
        id: "2",
        horario: "14h00",
        compromisso: "Reunião com cliente Carros & Carros",
      },
      { id: "3", horario: "16h00", compromisso: "Prazo final Projeto X" },
    ],
  },
  {
    titulo: "Jurema (Chefe)",
    data: [
      { id: "4", horario: "9h30", compromisso: 'Reunião "Daily"' },
      { id: "5", horario: "12h00", compromisso: "Almoço com a diretoria" },
      { id: "6", horario: "15h00", compromisso: "Saída viagem" },
    ],
  },
  {
    titulo: "Aderbal",
    data: [
      { id: "7", horario: "9h30", compromisso: 'Reunião "Daily"' },
      { id: "8", horario: "13h30", compromisso: "Visita técnica Uni-FACEF" },
      { id: "9", horario: "16h30", compromisso: "Prazo final Projeto X" },
    ],
  },
];

const CompromissosEquipeScreen = () => {
  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.titulo}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.horario}>{item.horario}</Text>
      <Text style={styles.compromisso}>{item.compromisso}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Thales Vinícius Leal Barcelos - Engenharia de Software{" "}
      </Text>
      <SectionList
        sections={compromissosEquipe}
        keyExtractor={(item) => item.id}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  listContent: {
    padding: 15,
  },
  sectionHeader: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  horario: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  compromisso: {
    fontSize: 16,
    color: "#333",
  },
});

export default CompromissosEquipeScreen;
