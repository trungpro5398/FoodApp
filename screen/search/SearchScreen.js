import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCar} from '@fortawesome/free-solid-svg-icons';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyAtN8cK0ZdChFOEITqcqJFtKFqUtqw3ax4';
// const GOOGLE_MAPS_APIKEY = '';
class Searchscreen extends Component {
  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: -37.9145,
          longitude: 145.1275,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        {
          latitude: -37.9145,
          longitude: 145.1275,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      ],
    };

    this.mapView = null;
  }

  onMapPress = e => {
    this.setState({
      coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
    });
  };

  render() {
    return (
      <MapView
        zoomEnabled={true}
        initialRegion={this.state.coordinates[0]}
        style={StyleSheet.absoluteFill}
        ref={c => (this.mapView = c)}
        onPress={this.onMapPress}>
        {this.state.coordinates.map((coordinate, index) => (
          <Marker key={`coordinate_${index}`} coordinate={coordinate}>
            <FontAwesomeIcon icon={faCar} size={20} />
          </Marker>
        ))}
        {this.state.coordinates.length >= 2 && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            destination={
              this.state.coordinates[this.state.coordinates.length - 1]
            }
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

              this.mapView.fitToCoordinates(result.coordinates, {
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
    );
  }
}

export default Searchscreen;
