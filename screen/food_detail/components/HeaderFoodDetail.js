import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
const HeaderFoodDetail = props => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} size={20} />
      <Text style={styles.container__text}>{props.name}</Text>
      <FontAwesomeIcon icon={faList} size={20} />
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
  },
});

export default HeaderFoodDetail;
