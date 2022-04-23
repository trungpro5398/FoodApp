import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  restaurantData,
  icons,
  categoryData,
  COLORS,
} from '../../../assets/datas/Contant';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
const Bodysubhomebottom = props => {
  const listCategory = item => {
    return item.map(i => {
      return (
        <Text style={styles.container__item__bottom__category_text}>
          {categoryData.find(x => x.id == i).name}
        </Text>
      );
    });
  };
  const listItem = ({index, item}) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('Liked')}>
        <View style={styles.container__item} key={index}>
          <View style={styles.container__item__image}>
            <Image
              source={item.photo}
              style={styles.container__item__image__image}
            />
            <View style={styles.container__item__image_container}>
              <Text>{item.duration}</Text>
            </View>
          </View>
          <Text style={styles.container__item__text}>{item.name}</Text>
          <View style={styles.container__item__bottom}>
            <FontAwesomeIcon icon={faStar} size={20} color={COLORS.primary} />
            <Text style={styles.container__item__bottom__text}>
              {item.rating}
            </Text>
            <View style={styles.container__item__bottom__category}>
              {listCategory(item.categories)}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={restaurantData.filter(x => x.categories.includes(props.index))}
        renderItem={listItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container__item: {
    marginTop: 20,
  },
  container__item__image: {
    width: '100%',
    position: 'relative',
  },
  container__item__image__image: {
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
  container__item__image_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 100,
    height: 40,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 30,
  },
  container__item__text: {
    marginTop: 10,
    fontSize: 18,
  },
  container__item__bottom: {
    marginTop: 10,
    flexDirection: 'row',
  },
  container__item__bottom__text: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
  },
  container__item__bottom__category: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  container__item__bottom__category_text: {
    marginRight: 20,
    fontSize: 16,
  },
});

export default Bodysubhomebottom;
