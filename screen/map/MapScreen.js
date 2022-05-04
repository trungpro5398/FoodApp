import React, {useRef} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCar} from '@fortawesome/free-solid-svg-icons';

import {View} from 'react-native-animatable';
import Headermapscreen from './components/HeaderMapScreen';
import Bodymapscreen from './components/BodyMapScreen';
import Footermapscreen from './components/FooterMapScreen';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyAtN8cK0ZdChFOEITqcqJFtKFqUtqw3ax4';
// const GOOGLE_MAPS_APIKEY = '';
const Mapscreen = props => {
  coordinates = props.route.params.coordinates;
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Headermapscreen />
      <Bodymapscreen coordinates={coordinates}></Bodymapscreen>
      <Footermapscreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Mapscreen;
