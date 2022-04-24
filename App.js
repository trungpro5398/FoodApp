import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Homescreen from './screen/home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Searchscreen from './screen/search/SearchScreen';
import Likedscreen from './screen/liked/LikedScreen';
import Profilescreen from './screen/profile/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {COLORS} from './assets/datas/Contant';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
  faUtensils,
  faMagnifyingGlass,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Fooddetailscreen from './screen/food_detail/FoodDetailScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // creates object for Stack Navigator

export default class App extends Component {
  state = {
    animation: new Animated.Value(0),
    isChecked: [false, false, false, false],
    color: [
      COLORS.secondary,
      COLORS.secondary,
      COLORS.secondary,
      COLORS.secondary,
    ],
  };
  FirstScreenNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="FoodDetail" component={Fooddetailscreen} />
      </Stack.Navigator>
    );
  };
  startAnimation = index => {
    let isChecked = [...this.state.isChecked].map((_, i) =>
      i == index ? true : false,
    );
    let color = [...this.state.color].map((_, i) =>
      i == index ? COLORS.primary : COLORS.secondary,
    );
    this.setState({
      isChecked: isChecked,
      color: color,
    });
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };
  renderTab = (icon, animated, index) => {
    return (
      <Animated.View style={[styles.tab, animated]}>
        <TouchableWithoutFeedback onPress={() => this.startAnimation(index)}>
          <FontAwesomeIcon
            icon={icon}
            size={20}
            style={{color: this.state.color[index]}}
          />
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  };
  render() {
    const animatedInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0],
    });
    const animatedReturnInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50],
    });
    const animatedStyles = {
      transform: [{translateY: animatedInterpolate}],
    };
    const animatedReturnStyles = {
      transform: [{translateY: animatedReturnInterpolate}],
    };
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="Home"
            component={this.FirstScreenNavigator}
            options={{
              tabBarIcon: () => {
                return this.state.isChecked[0]
                  ? this.renderTab(faUtensils, animatedReturnStyles, 0)
                  : this.renderTab(faUtensils, animatedStyles, 0);
              },
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Searchscreen}
            options={{
              tabBarIcon: () => {
                return this.state.isChecked[1]
                  ? this.renderTab(faMagnifyingGlass, animatedReturnStyles, 1)
                  : this.renderTab(faMagnifyingGlass, animatedStyles, 1);
              },
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Liked"
            component={Likedscreen}
            options={{
              tabBarIcon: () => {
                return this.state.isChecked[2]
                  ? this.renderTab(faHeart, animatedReturnStyles, 2)
                  : this.renderTab(faHeart, animatedStyles, 2);
              },
              tabBarShowLabel: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profilescreen}
            options={{
              tabBarIcon: () => {
                return this.state.isChecked[3]
                  ? this.renderTab(faUser, animatedReturnStyles, 3)
                  : this.renderTab(faUser, animatedStyles, 3);
              },
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    padding: 20,
    borderRadius: 40,
    backgroundColor: COLORS.white,
  },
});
