import React, { Component } from "react";
import Modal from "../components/Modal/CustomModal";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

class ModalScreen extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    const modalProps = {
      animationType: "slide",
      transparent: false,
      visible: this.state.modalVisible,
      onRequestClose: () => {
        alert("Modal has been close");
      }
    };
    return (
      <View style={Styles.modalContainer}>
        <Modal {...modalProps}>
          <View style={Styles.modalContainer}>
            <View>
              <Text>Hello Modal!!</Text>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </View>

            <TouchableOpacity
              style={Styles.closeButton}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Text style={Styles.closeButtonText}>{"Close Modal"}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={Styles.space}>
        <Button
          title={"Show Modal"}
          style={Styles.showModalButton}
          onPress={() => this.setModalVisible(true)}
        />
        </View>
        <View style={Styles.space}>
        <Button
          title={"Go Back"}
          style={Styles.showModalButton}
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    marginTop: 22,
    justifyContent: "center"    
  },
  button: {
    width: 30
  },
  modalContainer: {
    padding: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  closeButton: {
    width: 250,
    alignItems: "center",
    backgroundColor: "#f96d01",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  space: {
    margin: 10,
  }
});

export default ModalScreen;
