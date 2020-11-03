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
import AddModal from './Components/AddModal';
import EditModal from './Components/EditModal';

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
          <TouchableOpacity
            style={styles.iconHolder}
            onPress={() => this.addModal.controlModal()}>
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

          <SelectModal
            ref={(value) => (this.selectModal = value)}
            editModal={() => this.editModal.controlModal()}
          />

          <AddModal ref={(value) => (this.addModal = value)} />
          <EditModal ref={(value) => (this.editModal = value)} />
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
  },
});
