/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components';

export class ImgPick extends React.Component {
  state = {};

  render() {
    return (
      <View
        style={{
          //   backgroundColor: '#faf',
          flex: 1,
        }}>
        <NavHeader
          title={'Dashboard'}
          leftIc={'ios-list'}
          leftPressed={() => {}}
        />
      </View>
    );
  }
}
