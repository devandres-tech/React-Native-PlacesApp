import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const PlaceList = props => {


  return (
    <FlatList
      renderItem={(info) => (
        <ListItem
          onItemPressed={() => props.onItemSelected(info.item.key)}
          key={info.item.key}
          placeImage={info.item.image}
          placeName={info.item.name}
        />
      )}
      data={props.places}
      style={styles.listContainer}
    />
  )
};


const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default PlaceList;