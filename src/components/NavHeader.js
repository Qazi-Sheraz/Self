/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class NavHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          // backgroundColor: '#afa',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 0.7,
          // borderBottomColor: 'red',
        }}>
        <TouchableOpacity
          onPress={this.props.leftPressed}
          style={{
            // backgroundColor: '#faf',
            height: '100%',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.leftIc} size={25} color={'red'} />
        </TouchableOpacity>
        <View
          style={{
            // backgroundColor: '#a23',
            height: '100%',
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: this.props.custom ? '#fff' : '#000',
              fontSize: 18,
            }}>
            {this.props.title}
          </Text>
        </View>

        <TouchableOpacity
          onPress={this.props.rightPressed}
          style={{
            // backgroundColor: '#faf',
            height: '100%',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.rightIc} size={25} color={'red'} />
        </TouchableOpacity>
      </View>
    );
  }
}
