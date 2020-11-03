import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

//Data
import items from './Data/data';
//Components
import ListItem from './Components/ListItem';
import SelectModal from './Components/SelectModal';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    return (
      <>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconHolder}>
            <Icon name="ellipsis-vertical" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={items}
            renderItem={({item, index}) => {
              return (
                <ListItem
                  controlModal={() => this.selectModal.controlModal()}
                  item={item}
                  index={index}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />

          <SelectModal ref={(value) => (this.selectModal = value)} />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    padding: 5,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#2196f3',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconHolder: {
    marginRight: 5,
  }
});
