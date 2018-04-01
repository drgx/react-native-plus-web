/**
 * Since some react native component still in backlog, including modal
 * (https://github.com/necolas/react-native-web/issues/91)
 * This component is using react dom portal as workaround for modal
 */

//TODO Animation & history navigation support
import React, { Component } from "react";
import Portal from "./Portal";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

class CustomModal extends Component {
  render() {
    const { animationType, transparent, visible, onRequestClose } = this.props;
    const modalProps = {
      animationType,
      transparent,
      visible,
      onRequestClose
    };
    return visible ? (
      <Portal>
        <View style={Styles.modalContainer}>{this.props.children}</View>
      </Portal>
    ) : null;
  }
}

const Styles = StyleSheet.create({
  modalContainer: {
    height: "100%",
    width: "100%",
    position: "fixed",
    backgroundColor: "#fff"
  }
});

CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  animationType: PropTypes.string,
  transparent: PropTypes.bool
};

export default CustomModal;
