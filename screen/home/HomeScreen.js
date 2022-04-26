import React from 'react';
import {View, StyleSheet} from 'react-native';
import Bodyhome from './components/BodyHome';
import Headerhome from './components/HeaderHome';
import Colors from '../../assets/datas/Colors';
const Homescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Headerhome />
      <Bodyhome navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
  },
});

export default Homescreen;
