import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {categoryData} from '../../../assets/datas/Contant';
import {useSelector, useDispatch} from 'react-redux';
import {changeIndex} from '../features/indexItemSlice';
import Bodysubhometopitem from './BodySubHomeTopItem';
const Bodysubhometop = props => {
  const listItem = ({item}) => {
    {
      return <Bodysubhometopitem item={item} />;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={listItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingRight: 10,
  },
});

export default Bodysubhometop;
