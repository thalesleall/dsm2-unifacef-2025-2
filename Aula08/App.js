import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CameraScreen from './screens/CameraScreen';
import GalleryScreen from './screens/GalleryScreen';
import DemoScreen from './screens/DemoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FF6B6B',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            tabBarLabel: 'Câmera',
            tabBarIcon: ({ color }) => (
              <TabBarIcon icon="📷" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarLabel: 'Galeria',
            tabBarIcon: ({ color }) => (
              <TabBarIcon icon="🖼️" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Demo"
          component={DemoScreen}
          options={{
            tabBarLabel: 'Demo',
            tabBarIcon: ({ color }) => (
              <TabBarIcon icon="✨" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

function TabBarIcon({ icon, color }) {
  return (
    <Text style={{ fontSize: 24, opacity: color === '#8E8E93' ? 0.5 : 1 }}>
      {icon}
    </Text>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 5,
    paddingTop: 5,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
