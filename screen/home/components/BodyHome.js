import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Bodysubhometop from './BodySubHomeTop';
import Bodysubhomebottom from './BodySubHomeBottom';
const Bodyhome = props => {
  const [index, setIndex] = useState(1);
  const onClick = index => {
    setIndex(index);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.container__text}>Main</Text>
      <Text style={styles.container__text}>Categories</Text>
      <Bodysubhometop onClick={onClick} />
      <Bodysubhomebottom index={index} navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  container__text: {
    fontSize: 26,
    fontWeight: '500',
  },
});

export default Bodyhome;
