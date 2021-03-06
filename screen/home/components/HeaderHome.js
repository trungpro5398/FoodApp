import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStreetView} from '@fortawesome/free-solid-svg-icons/faStreetView';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../../assets/datas/Colors';

const Headerhome = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faStreetView}
        size={20}
        color={Colors.primaryDark}
      />
      <Text style={styles.container__text}>745 Lincoln PI</Text>
      <FontAwesomeIcon
        icon={faCartShopping}
        size={20}
        color={Colors.primaryDark}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Platform.OS == 'ios' ? 54 : 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container__text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primaryDark,
  },
});

export default Headerhome;
