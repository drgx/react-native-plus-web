import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class NavigationScreen extends React.Component {
  state = {
    text: ''
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{`Navigation Screen`}</Text>
        <View style={Styles.space}>
          <Button
            title="Go to About Screen"
            onPress={() => {
              this.props.navigation.navigate("About");
            }}
          />
        </View>        
        <View style={Styles.space}>
          <Button
            title="Back"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  space: {
    margin: 5
  }
});

export default NavigationScreen;
