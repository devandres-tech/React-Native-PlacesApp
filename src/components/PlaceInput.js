import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    placeName: '',
  };

  placeNameChangedHandler = (value) => {
    this.setState({ placeName: value })
  };

  placeSubmitHandler = () => {
    // don't add empty values
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName)
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="set field here"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          onPress={() => this.placeSubmitHandler()}
          style={styles.placeButton}
          title="Add"
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
})