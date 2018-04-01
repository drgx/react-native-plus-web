import React, { Component } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";

class PlatformComponent extends Component {
  render() {
    return (
      <View style={Styles.container}>                
        <Text style={Styles.label}>{`Lightning ️⚡`}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
      padding: 6,                
      borderColor: '#5A88FF',       
      borderRadius: 4,
      borderWidth: 1,
      backgroundColor: 'white'
  },
  label: {
      color: '#5A88FF'
  }
})

export default PlatformComponent;
