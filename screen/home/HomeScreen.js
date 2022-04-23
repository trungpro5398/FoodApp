import React from 'react';
import {View, StyleSheet} from 'react-native';
import Bodyhome from './components/BodyHome';
import Headerhome from './components/HeaderHome';

const Homescreen = ({navigation}) => {
  return (
    <View>
      <Headerhome />
      <Bodyhome navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Homescreen;
