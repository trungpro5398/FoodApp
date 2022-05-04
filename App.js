import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import store from './store';
import {Provider} from 'react-redux';
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
      <Provider store={store}>
        <NavigationContainer screenOptions={options}>
          <Animatetab />
        </NavigationContainer>
      </Provider>
    );
  }
}
