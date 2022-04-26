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
import Colors from '../../../assets/datas/Colors';
const Bodysubhometop = props => {
  const [clicked, setClicked] = useState([true, false, false, false]);
  const onClick = (index, id) => {
    let result = [...clicked];
    result = result.map(x => false); // reset previous click
    result[index] = true;
    setClicked(result);
    props.onClick(id);
  };
  const listItem = ({index, item}) => {
    {
      return (
        <TouchableOpacity
          onPress={() => onClick(index, item.id)}
          key={index}
          style={StyleSheet.compose(
            styles.container__item,
            clicked[index]
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
              clicked[index]
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
      );
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

export default Bodysubhometop;
