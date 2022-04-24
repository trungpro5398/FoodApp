import React from 'react';
import {View, StyleSheet} from 'react-native';
import BodyFoodDetail from './components/BodyFoodDetail';
import HeaderFoodDetail from './components/HeaderFoodDetail';

const Fooddetailscreen = props => {
  return (
    <View>
      <HeaderFoodDetail name={props.route.params.item.name} />
      <BodyFoodDetail item={props.route.params.item} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Fooddetailscreen;
