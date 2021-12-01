/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Settings extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          //   backgroundColor: '#FAF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: h('8%'),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: h('0.05'),
            borderBottomWidth: h('0.05'),
          }}>
          <Text
            style={{
              fontSize: 17,
            }}>
            SignIn
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: h('8%'),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: h('0.05'),
          }}>
          <Text
            style={{
              fontSize: 17,
            }}>
            Contact US
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
