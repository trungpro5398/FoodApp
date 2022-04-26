import React from 'react';
import {View, StyleSheet, Text, Platform, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Colors from '../../../assets/datas/Colors';

const HeaderFoodDetail = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          ß
          size={20}
          color={Colors.primaryDark}
        />
      </TouchableOpacity>
      <Text style={styles.container__text}>{props.name}</Text>
      <FontAwesomeIcon icon={faList} size={20} color={Colors.primaryDark} />
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

export default HeaderFoodDetail;
