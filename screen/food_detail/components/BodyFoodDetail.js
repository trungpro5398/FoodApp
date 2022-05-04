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
import {faFire, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faCcMastercard} from '@fortawesome/free-brands-svg-icons';
import Colors from '../../../assets/datas/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {decreaseAmount, increaseAmount} from '../features/amountSlice';
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

  const count = useSelector(state => state.amount.value);
  const dispatch = useDispatch();
  const getAmount = (nameRes, nameFood) => {
    const indexRes = count.findIndex(x => x.name == nameRes);
    const indexItem = count[indexRes].menu.findIndex(x => x.name == nameFood);
    return count[indexRes].menu[indexItem].amount;
  };
  const itemsInCart = nameRes => {
    const indexRes = count.findIndex(x => x.name == nameRes);
    const stateAmount = count[indexRes].menu;
    return stateAmount.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
  };
  const moneyInCart = nameRes => {
    const indexRes = count.findIndex(x => x.name == nameRes);
    const stateAmount = count[indexRes].menu;
    return stateAmount.reduce((acc, item) => {
      return acc + item.amount * item.price;
    }, 0);
  };
  const calorieAmount = (nameRes, nameItem) => {
    const indexRes = count.findIndex(x => x.name == nameRes);
    const stateAmount = count[indexRes].menu;
    const index = stateAmount.findIndex(x => x.name === nameItem);
    return stateAmount[index].amount * stateAmount[index].calories;
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.container__item}>
        <View style={styles.container__item__container}>
          <Image
            style={styles.container__item__container__image}
            source={item.photo}
          />
          <View style={styles.container__item__container__amount}>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  decreaseAmount({
                    nameRes: props.item.name,
                    nameItem: item.name,
                  }),
                )
              }>
              <Text
                style={[
                  styles.container__item__container__amount__button,
                  {color: Colors.secondary},
                ]}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={styles.container__item__container__amount__text}>
              {getAmount(props.item.name, item.name)}
            </Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  increaseAmount({
                    nameRes: props.item.name,
                    nameItem: item.name,
                  }),
                )
              }>
              <Text style={styles.container__item__container__amount__button}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.container__item__text}>
          {item.name} - ${item.price}
        </Text>
        <Text style={styles.container__item__text_1}>{item.description}</Text>
        <View style={styles.container__item__bottom}>
          <FontAwesomeIcon icon={faFire} size={20} color={Colors.primaryDark} />
          <Text style={styles.container__item__bottom__text}>
            {calorieAmount(props.item.name, item.name)} cal
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View>
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
      <View style={styles.container__cart}>
        <Text style={styles.container__cart__amount}>
          {itemsInCart(props.item.name)} items in cart
        </Text>
        <Text style={styles.container__cart__money}>
          ${moneyInCart(props.item.name)}
        </Text>
      </View>
      <View style={styles.container__info}>
        <View style={styles.container__info__left}>
          <FontAwesomeIcon
            icon={faLocationDot}
            size={20}
            color={Colors.primaryDark}
          />
          <Text style={styles.container__info__address}>745 Lincoln PI</Text>
        </View>
        <View style={styles.container__info__rights}>
          <FontAwesomeIcon
            icon={faCcMastercard}
            size={20}
            color={Colors.primaryDark}
          />
          <Text style={styles.container__info__cart}>....5491</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,

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
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  container__item__container__amount: {
    position: 'absolute',
    bottom: 0,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 5,
    width: '50%',
    borderRadius: 30,
  },
  container__item__container__amount__button: {
    color: Colors.primaryDark,
    fontSize: 18,
  },
  container__item__container__amount__text: {
    color: Colors.primaryDark,
    fontSize: 18,
  },
  container__item__text: {
    fontSize: 18,
    color: Colors.primaryDark,
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
    flexDirection: 'row',
    bottom: '10%',
    alignSelf: 'center',
  },
  paginText: {
    color: Colors.primaryDark,
    fontSize: 10,
    marginLeft: 10,
  },
  pageinActiveText: {
    color: Colors.white,
    fontSize: 10,
    marginLeft: 10,
  },
  container__cart: {
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container__cart__amount: {
    color: Colors.primaryDark,
    fontSize: 18,
  },
  container__cart__money: {
    color: Colors.primaryDark,
    fontSize: 18,
  },
  container__item__text_1: {
    fontSize: 18,
    color: Colors.primaryDark,
  },
  container__info: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  container__info__left: {
    flexDirection: 'row',
  },
  container__info__address: {
    fontSize: 18,
    color: Colors.primaryDark,
    marginLeft: 10,
  },
  container__info__rights: {
    flexDirection: 'row',
  },
  container__info__cart: {
    fontSize: 18,
    color: Colors.primaryDark,
    marginLeft: 10,
  },
  container__item__bottom__text: {
    fontSize: 18,
    color: Colors.primaryDark,
    marginLeft: 10,
  },
});

export default BodyFoodDetail;
