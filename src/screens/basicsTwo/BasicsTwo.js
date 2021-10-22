/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';

export class BasicsTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: '#808',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              backgroundColor: '#faf',
              height: 40,
              width: '70%',
            }}
            placeholder={'Enter Name'}
          />
        </View>
      </View>
    );
  }
}
