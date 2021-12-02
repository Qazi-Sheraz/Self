/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';

import {ScreenNavigator} from './src/navigations/ScreenNavigator';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return <ScreenNavigator />;
};
export default App;
