import 'react-native-gesture-handler'; // Must be at top of file

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Notifications } from 'react-native-notifications';
import { NavigationContainer } from '@react-navigation/native';
import OffersStack from './src/router/OffersStack';

export default function App() {
  return (
    <NavigationContainer>
      <OffersStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 27,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0b46cd',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 22,
    color: '#ffffff',
  },
});
