import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}

const MyApp = StackNavigator({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingScreen}
});