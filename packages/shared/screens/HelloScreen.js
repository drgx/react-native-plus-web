import React from "react";
import { View, Text, StyleSheet } from "react-native";

class HelloScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>{'Hello REACT NATIVE!'}</Text>        
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  }
});

export default HelloScreen;
