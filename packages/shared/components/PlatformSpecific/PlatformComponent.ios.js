import React, { Component } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";

class PlatformComponent extends Component {
  render() {
    return (
      <View style={Styles.container}>                
        <Text style={Styles.label}>{`Hey dude! 👽`}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
      padding: 6,                
      borderColor: '#1ECD97',       
      borderRadius: 4,
      borderWidth: 1,
      backgroundColor: 'white'
  },
  label: {
      color: '#1ECD97'
  }
})

export default PlatformComponent;
