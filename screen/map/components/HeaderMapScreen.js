import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapPin} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../../assets/datas/Colors';
const Headermapscreen = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faMapPin}
        size={20}
        color={'red'}
        style={{marginLeft: 20}}
      />
      <Text style={{marginLeft: 20}}>745 Liconln PI, New York</Text>
      <Text style={{marginLeft: 40}}>7 Mins</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: Colors.green,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 40,
    position: 'absolute',
    left: 5,
    top: 0,
    zIndex: 1,
  },
});

export default Headermapscreen;
