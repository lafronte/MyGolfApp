import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './screens/MainScreen'
import GolfersScreen from './screens/GolfersScreen'
import Leaderboard from './screens/Leaderboard'
import LoginScreen from './screens/LoginScreen'
import NewGolfer from './screens/NewGolfer'
import Events from './screens/Events'

export default class App extends React.Component {  
  render() {
    return (
      <MainNavigator />
    );
  }
}
const MainNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  MainScreen: { screen: MainScreen },
  GolfersScreen: { screen: GolfersScreen },
  Leaderboard: { screen: Leaderboard },
  NewGolfer: { screen: NewGolfer },
  Events: { screen: Events}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 