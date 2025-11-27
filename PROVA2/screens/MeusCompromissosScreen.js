import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const compromissos = [
  { id: "1", titulo: 'Reunião "Daily"', horario: "9h30" },
  { id: "2", titulo: "Reunião com cliente Carros & Carros", horario: "14h00" },
  { id: "3", titulo: "Prazo final Projeto X", horario: "16h00" },
];

const MeusCompromissosScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.horario}>{item.horario}</Text>
      <Text style={styles.titulo}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Thales Vinícius Leal Barcelos - Engenharia de Software{" "}
      </Text>
      <FlatList
        data={compromissos}
        keyExtractor={(item) => item.id}
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
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
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
  titulo: {
    fontSize: 16,
    color: "#333",
  },
});

export default MeusCompromissosScreen;
