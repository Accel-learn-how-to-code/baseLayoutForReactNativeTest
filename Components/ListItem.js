import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

function Item({item, controlModal}) {
  return (
    <TouchableOpacity style={styles.itemHolder} onPress={controlModal}>
      <View style={styles.imageHolder}></View>
      <View style={styles.information}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}$</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemHolder: {
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  imageHolder: {
    height: 70,
    width: 70,
    backgroundColor: '#ddd',
  },
  information: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Item;
