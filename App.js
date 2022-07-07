import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GreetingsScreen from './pages/GreetingsScreen';
import RegisterScreen from './pages/RegisterScreen';
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Greetings" 
          component={GreetingsScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(0, 2, 30)',
              boxShadow: 'none'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(0, 2, 30)',
              boxShadow: 'none'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(0, 2, 30)',
              boxShadow: 'none'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(0, 2, 30)',
              boxShadow: 'none'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
