import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";

class HomeScreen extends React.Component {
  state = {
    text: ""
  };
  
  render() {
    const iconProps = {
      size: 30,
      color: '#900'
    };
    const menuButtonStyle =
      Platform.OS === "android" ? Styles.menuButtonAndroid : Styles.menuButton;
    return (
      <View style={Styles.wrapper}>                
        <View>
          <Text>{`Welcome To React Native!`}</Text>
        </View>
        <View style={Styles.menu}>
        <TouchableOpacity style={menuButtonStyle} onPress={()=> this.props.navigation.navigate('Hello')}>
            <Entypo name="info" {...iconProps}/>
            <Text style={Styles.menuLabel}>{`Hello World!`}</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={menuButtonStyle} onPress={()=> this.props.navigation.navigate('Shared')}>
            <Entypo name="shareable" {...iconProps}/>
            <Text style={Styles.menuLabel}>{`Shared Component`}</Text>
          </TouchableOpacity>      
          <TouchableOpacity style={menuButtonStyle} onPress={()=> this.props.navigation.navigate('Navigation')}>
            <Foundation name="page-multiple" {...iconProps}/>
            <Text style={Styles.menuLabel}>{`Navigation`}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menuButtonStyle} onPress={()=> this.props.navigation.navigate('Modal')}>
            <Entypo name="popup" {...iconProps}/>
            <Text style={Styles.menuLabel}>{`Modal`}</Text>
          </TouchableOpacity>      
        </View>
      </View>
    );
  }
}

const buttonCommonStyle = {
  margin: 10,
  width: 100,
  height: 100,
  backgroundColor: "#fff",
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: "#ddd",
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center"
};

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee"
  },
  space: {
    margin: 5
  },
  menu: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 60,
  },
  menuLabel: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5
  },
  menuButtonAndroid: {
    ...buttonCommonStyle,
    elevation: 2
  },
  menuButton: {
    ...buttonCommonStyle,
    shadowColor: "#9a9a9a",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2
  }
});

export default HomeScreen;
