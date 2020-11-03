import React, {Component} from 'react';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';

//Components

export default class SelectModal extends Component {
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

  editModal = () => {
    this.controlModal();
    this.props.editModal();
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}>
        <View style={styles.centeredModal}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => this.editModal()}>
              <Text style={styles.textStyle}> Chỉnh sửa </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.openButton}
              onPress={() => this.controlModal()}>
              <Text style={styles.textStyle}> Xóa </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.openButton}
              onPress={() => this.controlModal()}>
              <Text style={styles.textStyle}> Cancel </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredModal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
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
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
