import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = (props) => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    )
  }
  return (
    <Modal
      transparent={false}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
      animationType='slide'
      visible={props.selectedPlace !== null}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button
            onPress={props.onItemDeleted}
            title='Delete'
            color='red'
          />
          <Button
            onPress={props.onModalClosed}
            title='Close'
          />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 40
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
})

export default placeDetail;