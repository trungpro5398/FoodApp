import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import BodyFoodDetail from './components/BodyFoodDetail';
import HeaderFoodDetail from './components/HeaderFoodDetail';
import Colors from '../../assets/datas/Colors';
const Fooddetailscreen = props => {
  const startCoord = props.route.params.initialCoordinate.gps;
  const endCoord = props.route.params.resCoordinate;
  console.log(startCoord, endCoord);
  return (
    <View style={styles.container}>
      <HeaderFoodDetail
        name={props.route.params.item.name}
        navigation={props.navigation}
      />
      <BodyFoodDetail item={props.route.params.item} />
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Map', {
            coordinates: [startCoord, endCoord],
          })
        }>
        <View style={styles.container__view}>
          <Text style={styles.text}>Order</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
  },
  container__view: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: Colors.primaryDark,
  },
});

export default Fooddetailscreen;
