import React from 'react';
import { View, Text } from 'react-native';

import IntroScreen from './src/screens/IntroScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogIntoScreen'; // Під іншим ім'ям
import MainScreen from './src/screens/MainScreen';
import CreateMemoryScreen from './src/screens/CreateMemoryScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './src/contexts/userContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Introduction"
            component={IntroScreen}
            options={{ headerShown: false }} 
          />
        <Stack.Screen
            name="Sign-up"
            component={SignUpScreen}
            options={{ headerShown: false }} 
          />
        <Stack.Screen
            name="Log-in"
            component={LogInScreen}
            options={{ headerShown: false }} 
          />
        <Stack.Screen
            name="Main-page"
            component={MainScreen}
            options={{ headerShown: false }} 
          />
        <Stack.Screen
            name="Create-memory"
            component={CreateMemoryScreen}
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
