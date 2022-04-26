import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';

import Animatetab from './bottomTab/AnimateTab';
const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  headerShown: false,
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer screenOptions={options}>
        <Animatetab />
      </NavigationContainer>
    );
  }
}
