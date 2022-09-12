/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/screens/Login';
import { Settings } from './src/components/screens/Settings';
import { Guide } from './src/components/screens/Guide';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Guide" component={Guide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
