import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import GaleriaScreen from './screens/GaleriaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Início">
				<Stack.Screen name="Início" component={HomeScreen} />
				<Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
				<Stack.Screen name="Galeria" component={GaleriaScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}