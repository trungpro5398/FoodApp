import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Colors from '../../../assets/datas/Colors';
import {avatar_1, COLORS} from '../../../assets/datas/Contant';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
const Footermapscreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container__top}>
        <View style={styles.container__top__left}>
          <Image source={avatar_1} style={styles.avatar} />
        </View>
        <View style={styles.container__top__right}>
          <View style={styles.container__top__right__left}>
            <Text style={styles.name}>ByProgrammers Burger</Text>
            <Text style={styles.rating}>Burger Story</Text>
          </View>
          <View style={styles.container__top__right__right}>
            <FontAwesomeIcon
              icon={faStar}
              size={20}
              color={COLORS.primary}
              style={{marginRight: 10}}
            />
            <Text>4.7</Text>
          </View>
        </View>
      </View>
      <View style={styles.container__bottom}>
        <TouchableOpacity>
          <View style={styles.container__bottom__left}>
            <Text style={{color: 'white'}}>Call</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.container__bottom__right}>
            <Text style={{color: 'white'}}>Message</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: -5,
    bottom: 0,
    zIndex: 1,
    backgroundColor: Colors.green,
    marginBottom: 120,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 15,
  },
  container__top: {
    flexDirection: 'row',
  },
  container__top__right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  container__top__right__right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 40,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  container__bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  container__bottom__left: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 15,
  },
  container__bottom__right: {
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 15,
  },
});

export default Footermapscreen;
