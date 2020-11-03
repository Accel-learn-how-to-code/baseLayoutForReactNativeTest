import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

export default class AddModal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
  }
  controlModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}>
        <View style={styles.centeredModal}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Type here"
              //onChangeText={(text) => setText(text)}
              //defaultValue="lalala"
            />
            <TextInput
              style={styles.input}
              placeholder="Type here too!"
              //onChangeText={(text) => setText(text)}
              //defaultValue="lalala 2"
            />

            <View style={styles.buttonHolder}>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => this.controlModal()}>
                <Text style={styles.textStyle}> Thêm </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.openButton}
                onPress={() => this.controlModal()}>
                <Text style={styles.textStyle}> Cancel </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: deviceWidth * 0.5,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    flex: 1,
    backgroundColor: '#F194FF',
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    margin: 3,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#aaa',
  },
});
