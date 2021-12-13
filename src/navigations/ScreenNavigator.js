/* eslint-disable no-undef */
// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '../screens/signUp';
import {Basics} from '../screens/basics';
import {BasicsTwo} from '../screens/basicsTwo';
import {EditProfile} from '../screens/editProfile';
import {List} from '../screens/list';
import {DetailsScreen} from '../screens/list';
import {ColumnList} from '../screens/list';
import {MultiList} from '../screens/list';
import {Settings} from '../screens/settings';
import {Splash} from '../screens/splash';
import {TabNavigator} from './TabNavigator';
import {ImgPick} from '../screens/imgPick/ImgPick';
import {DateTimePick} from '../screens/dateTimePick';

const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DateTimePick"
          component={DateTimePick}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImgPick"
          component={ImgPick}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MultiList"
          component={MultiList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ColumnList"
          component={ColumnList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="BasicsTwo"
          component={BasicsTwo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
