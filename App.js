/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import placeImage from './src/assets/logo.png';
import PlaceDetail from './src/components/placeDetail';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  }

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Andalusia/Seville/seville-lead-image-guide.jpg?imwidth=450'
          }
        })
      }
    })
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  };

  modalClosedHandler = () => {
    this.setState({ selectedPlace: null })
  };

  placeSelectedHandler = (key) => {
    // set the selected place in the state
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    });
  };

  render() {

    return (
      // places elements in a column
      <View style={styles.container}>
        <PlaceDetail
          onModalClosed={this.modalClosedHandler}
          onItemDeleted={this.placeDeletedHandler}
          selectedPlace={this.state.selectedPlace}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

});
