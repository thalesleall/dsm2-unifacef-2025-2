
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
				style={styles.avatar}
			/>
			<Text style={styles.name}>João Silva</Text>
			<Icon name="account" size={40} color="#007AFF" style={styles.icon} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
	avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
	name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
	icon: { marginTop: 10 },
});
