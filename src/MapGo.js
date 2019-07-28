import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import { FlatList, Text  } from 'react-native';


const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 'auto',
   width: 'auto',
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default class Map extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
          backgroundColor: "transparent",
          borderBottomWidth: 0,
          shadowOpacity: 0,
            shadowOffset: {
              height: 0
            },
          shadowRadius: 0,
          elevation: 0
        }
      })

      // constructor(props){
      //   super(props);
      //   this.state ={ isLoading: true}
      // }
    
      // componentDidMount(){
      //   return fetch('https://flame-gerbil.glitch.me/')
      //     .then((response) => response.json())
      //     .then((responseJson) => {
      //       this.setState({
      //         isLoading: false,
      //         dataSource: responseJson.coordinates,
      //         longitude:  responseJson.coordinates.longitude[0],
      //         latitude: responseJson.coordinates.latitude[0]
      //       }, function(){
    
      //       });
    
      //     })
      //     .catch((error) =>{
      //       console.error(error);
      //     });
      // }

    
  render() {
    return(
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.792970,
            longitude: -122.404790,
            latitudeDelta: 0.020,
            longitudeDelta: 0.030,
          }}
        >
        <MapView.Marker
          coordinate={{
          latitude: 37.790740,
          longitude: -122.410300}}
         />
         <MapView.Marker
          coordinate={{
          latitude: 37.792970,
          longitude: -122.404790}}
         />
         <MapView.Marker
          coordinate={{
          latitude: 37.794868,
          longitude: -122.398933}}
         />
        </MapView>
      </View>
    )
  }
}