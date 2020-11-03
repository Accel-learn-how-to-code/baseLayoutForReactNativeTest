import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

//Components

export default class HeaderModal extends Component {
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

  addModal = () => {
    this.controlModal();
    this.props.addModal();
  };

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}>
        <View style={styles.centeredModal}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => this.addModal()}>
              <Text style={styles.textStyle}> Thêm </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.openButton}
              onPress={() => this.controlModal()}>
              <Text style={styles.textStyle}> Xóa Hết </Text>
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
    alignItems: 'flex-end',
  },
  modalView: {
    marginTop: 40,
    width: deviceWidth * 0.4,
    backgroundColor: 'white',
    padding: 10,
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
    borderRadius: 10,
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
