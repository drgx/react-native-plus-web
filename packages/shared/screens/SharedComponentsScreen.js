import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import SharedComponent from 'shared/components/SharedComponent';
import PlatformSpecific from 'shared/components/PlatformSpecific/PlatformComponent';

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{`Shared Components Screen`}</Text>
        <View style={Styles.space}>
          <SharedComponent/>
        </View>
        <View style={Styles.space}>
          <PlatformSpecific/>
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
export default AboutScreen;
