import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFire} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from '../../../assets/datas/Contant';
const BodyFoodDetail = props => {
  const [state, changeState] = useState(0);
  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    ); // lay index cua hinh anh, toa do x, va khoang cach tu tu 0 cho den toa do keo
    if (slide !== state) {
      changeState(slide);
    }
  };
  const item = props.item.menu;
  const renderItem = ({item}) => {
    return (
      <View style={styles.container__item}>
        <View style={styles.container__item__container}>
          <Image
            style={styles.container__item__container__image}
            source={item.photo}
          />
          <View style={styles.container__item__container__amount}>
            <TouchableOpacity>
              <Text
                style={[
                  styles.container__item__container__amount__button,
                  {color: COLORS.secondary},
                ]}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.container__item__container__amount__text}>
              {1}
            </Text>
            <TouchableOpacity>
              <Text style={styles.container__item__container__amount__button}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.container__item__text}>
          {item.name} - ${item.price}
        </Text>
        <Text numberOfLines={2} style={styles.container__item__text_1}>
          {item.description}
        </Text>
        <View style={styles.container__item__bottom}>
          <FontAwesomeIcon icon={faFire} size={20} color={'red'} />
          <Text style={styles.container__item__bottom__text}>
            {item.calories}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={item}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled
        onScroll={change}
      />
      <View style={styles.pagination}>
        {item.map((i, k) => (
          <Text
            style={k === state ? styles.paginText : styles.pageinActiveText}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  container__item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    marginLeft: 26,
    marginRight: 26,
  },
  container__item__container: {
    position: 'relative',
    alignItems: 'center',
  },
  container__item__container__image: {
    width: 220,
    height: 220,
    borderRadius: 110,
  },
  container__item__container__amount: {
    position: 'absolute',
    bottom: 0,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 5,
    width: '50%',
    borderRadius: 30,
  },
  container__item__container__amount__button: {
    fontSize: 25,
  },
  container__item__container__amount__text: {
    fontSize: 25,
  },
  container__item__text: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '500',
  },
  container__item__bottom: {
    marginTop: 20,
    flexDirection: 'row',
  },
  pagination: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginText: {
    color: COLORS.primary,
    fontSize: 10,
    marginLeft: 10,
  },
  pageinActiveText: {
    color: COLORS.secondary,
    fontSize: 10,
    marginLeft: 10,
  },
});

export default BodyFoodDetail;
