/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  sendData = (param, param2) => {
    console.warn('This is param =    ' + param);
    console.warn('This is param2=   ' + param2);
  };
  sendData2 = abc => {
    console.warn('Sign In= ' + abc);
  };
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
              height: '50%',
              // backgroundColor: 'red',
              padding: 25,
            }}>
            <TextInput
              style={{
                // backgroundColor: '#fff',
                borderBottomWidth: 0.5,
                color: 'red',
              }}
              placeholder={'Name'}
            />
            <TextInput
              style={{
                // backgroundColor: '#fff',
                marginTop: 10,
                borderBottomWidth: 0.5,
                color: 'red',
              }}
              placeholder={'Email'}
              keyboardType={'email-address'}
            />
            <TextInput
              style={{
                // backgroundColor: '#fff',
                marginTop: 10,
                borderBottomWidth: 0.5,
                color: 'red',
              }}
              placeholder={'Password'}
              secureTextEntry
            />
            <View
              style={{
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  const param = 'study';
                  const param2 = 'study2';
                  this.sendData(param, param2);
                }}
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
          <View
            style={{
              // backgroundColor:'#faf',
              height: '10%',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 15,
              }}>
              Already have an Account?{' '}
            </Text>

            <TouchableOpacity
              onPress={() => {
                const abc = 'signIn';
                this.sendData2(abc);
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                  color: 'red',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}