/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class BasicsTwo extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: '#fa32',
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                // height: 100,
                width: '80%',
                borderColor: 'red',
                // borderLeftColor: 'red' ,
                // borderRightColor: 'red' ,
                // borderTopColor: 'red',
                // borderBottomColor: 'red',

                borderWidth: 1,
                // borderLeftWidth:2,
                // borderRightWidth:2,
                borderTopWidth: 2,
                // borderBottomWidth:2,

                // borderRadius:10,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 10,
                maxHeight: 80,
                paddingLeft: 10,
                paddingRight: 10,
                color: 'blue',
              }}
              placeholder={'Enter Name'}
              placeholderTextColor={'red'}
              multiline={true}

              // maxLength={4}
            />
          </View>
          <View
            style={{
              backgroundColor: '#808',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                // height: 100,
                width: '80%',
                borderColor: 'red',
                borderWidth: 1,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 10,
                maxHeight: 80,
                paddingLeft: 10,
                paddingRight: 10,
                color: 'blue',
              }}
              placeholder={'Email'}
              keyboardType={'email-address'}
              value={'study@gmail.com'}
              // editable
            />
          </View>

          <View
            style={{
              backgroundColor: '#808080',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: '80%',
                borderColor: 'red',

                borderWidth: 1,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 20,

                paddingLeft: 10,
                paddingRight: 10,
                color: 'blue',
              }}
              placeholder={'Password'}
              placeholderTextColor={'red'}
              // multiline={true}
              secureTextEntry
            />
          </View>
          <View
            style={{
              backgroundColor: '#808',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',

                width: '80%',
                borderColor: 'red',
                borderWidth: 1,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 10,

                paddingLeft: 10,
                color: 'blue',
              }}
              placeholder={'Phone'}
              keyboardType={'phone-pad'}
              maxLength={11}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
