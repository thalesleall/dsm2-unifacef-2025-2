import { View, Text, Button, StyleSheet } from 'react-native';
export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Perfil :)</Text>
            <Button
                title="Ir para Home"
                onPress={() => navigation.navigate('Início')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, fontWeight: 'bold' },
});