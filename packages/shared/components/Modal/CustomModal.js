import React, { Component } from "react";
import { Modal } from "react-native";
import PropTypes from "prop-types";

class CustomModal extends Component {
  render() {
    const { animationType, transparent, visible, onRequestClose } = this.props;
    const modalProps = {
      animationType,
      transparent,
      visible,
      onRequestClose
    };
    return (
      <Modal {...modalProps}>
        {this.props.children}
      </Modal>
    );
  }
}
CustomModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
  animationType: PropTypes.string,
  transparent: PropTypes.bool
};
export default CustomModal;
