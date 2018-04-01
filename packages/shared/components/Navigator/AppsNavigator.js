import React from 'react';
import { StackNavigator } from 'react-navigation';
import Routes, { initialRouteName } from '../../constants/routes';

export default StackNavigator(Routes, initialRouteName);