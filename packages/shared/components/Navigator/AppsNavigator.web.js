import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigatorSwitch from "./AppNavigatorSwitch";
import {View, Text} from 'react-native';
export default () => {
  return (
    <Router>      
      <AppNavigatorSwitch />
    </Router>
  );
};
