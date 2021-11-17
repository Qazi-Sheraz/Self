/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class List extends React.Component {
  state = {
    data: [],
  };

  render() {
    return (
      <ImageBackground
        source={require('../../asserts/list.jpg')}
        style={{
          flex: 1,
        }}>
        <NavHeader title={'List'} />
        <FlatList
          style={{
            // marginTop: h('5'),
            margin: h('1%'),
          }}
          data={[
            {
              name: 'Ali',
              fName: 'Umer',
            },
            {
              name: 'qwerty',
              fName: 'qwerty',
            },
          ]}
          renderItem={({item}) => (
            <View
              style={{
                height: h('8%'),
                // backgroundColor: '#aaf',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                borderWidth: h('0.1%'),
                borderRadius: h('1%'),
              }}>
              <Text
                style={{
                  fontSize: h('3%'),
                }}>
                Name: {item.name}
              </Text>
              <Text>Father Name: {item.fName}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: h('1%'),
              }}
            />
          )}
          keyExtractor={(index, item) => item.toString()}
        />
      </ImageBackground>
    );
  }
}
