import React, {useRef} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCar} from '@fortawesome/free-solid-svg-icons';
import {View} from 'react-native-animatable';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyAtN8cK0ZdChFOEITqcqJFtKFqUtqw3ax4';
// const GOOGLE_MAPS_APIKEY = '';
const Bodymapscreen = props => {
  coordinates = props.coordinates;
  mapView = null;
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={coordinates[0]}
        style={StyleSheet.absoluteFill}
        ref={c => (mapView = c)}
        onPress={this.onMapPress}>
        {coordinates.map((coordinate, index) => (
          <Marker key={`coordinate_${index}`} coordinate={coordinate}>
            <FontAwesomeIcon icon={faCar} size={20} />
          </Marker>
        ))}
        {coordinates.length >= 2 && (
          <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[coordinates.length - 1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onStart={params => {
              console.log(
                `Started routing between "${params.origin}" and "${params.destination}"`,
              );
            }}
            onReady={result => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min.`);

              mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20,
                },
              });
            }}
            onError={errorMessage => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Bodymapscreen;
