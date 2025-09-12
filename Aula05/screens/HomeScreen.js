import { View, Text, Button, StyleSheet } from 'react-native';
export default function HomeScreen({ navigation }) {
 return (
 <View style={styles.container}>
				<Text style={styles.titulo}>Bem-vindo ao App!</Text>
				<Button title="Ir para Perfil" onPress={() => navigation.navigate('Profile')} />
				<View style={{ marginTop: 10 }}>
					<Button title="Abrir Galeria" onPress={() => navigation.navigate('Galeria')} />
				</View>
 </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 titulo: { fontSize: 24, fontWeight: 'bold' }
});
