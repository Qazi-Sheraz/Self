/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export class AppBtn extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            // backgroundColor: '#faf',
            width: '100%',
            alignItems: 'center',
          },
          this.props.st,
        ]}>
        <TouchableOpacity
          {...this.props}
          style={{
            backgroundColor: '#000',
            width: '70%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
            }}>
            {this.props.txt}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
