import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Colors from '../../../assets/datas/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {changeIndex} from '../features/indexItemSlice';

const Bodysubhometopitem = props => {
  const item = props.item;
  const indexItem = useSelector(state => state.indexItem.value);
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity
        onPress={() => dispatch(changeIndex({index: item.id}))}
        style={StyleSheet.compose(
          styles.container__item,
          item.id == indexItem
            ? {
                backgroundColor: Colors.primary,
              }
            : {
                backgroundColor: Colors.white,
              },
        )}>
        <View style={styles.container__item__image}>
          <Image
            source={item.icon}
            style={styles.container__item__image__image}
          />
        </View>
        <Text
          style={StyleSheet.compose(
            styles.container__item__text,
            item.id == indexItem
              ? {
                  color: Colors.white,
                }
              : {
                  color: Colors.primary,
                },
          )}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container__item: {
    padding: 8,
    paddingBottom: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 10,
  },
  container__item__image: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  container__item__image__image: {
    width: 20,
    height: 20,
  },
  container__item__text: {
    color: Colors.primary,
    fontSize: 13,
    marginTop: 10,
    fontWeight: '500',
  },
});

export default Bodysubhometopitem;
