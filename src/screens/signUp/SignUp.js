/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            // backgroundColor: '#fad',
            flex: 1,
          }}>
          {/* spacer*/}
          <View
            style={{
              height: '15%',
              // backgroundColor: '#afa',
            }}
          />
          {/* {Top View} */}
          <View
            style={{
              // height: '15%',
              // backgroundColor: 'red',
              paddingLeft: 25,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000',
              }}>
              WELCOME
            </Text>
            <Text
              style={{
                fontSize: 18,
                // fontWeight: 'bold',
              }}>
              glad to see you!
            </Text>
          </View>
          {/* spacer */}
          <View
            style={{
              height: 40,
              // backgroundColor: '#fff',
            }}
          />
          {/* {Bottom View} */}
          <View
            style={{
              height: '40%',
              // backgroundColor: 'red',
              padding: 25,
            }}>
            <TextInput
              style={{
                // backgroundColor: '#fff',
                borderBottomWidth: 0.5,
              }}
              placeholder={'Name'}
            />
            <TextInput
              style={{
                // backgroundColor: '#fff',
                marginTop: 10,
                borderBottomWidth: 0.5,
              }}
              placeholder={'Email'}
              keyboardType={'email-address'}
            />
            <TextInput
              style={{
                // backgroundColor: '#fff',
                marginTop: 10,
                borderBottomWidth: 0.5,
              }}
              placeholder={'Password'}
              secureTextEntry
            />
          </View>
          <View
            style={{
              marginTop: 30,
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
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
                }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
