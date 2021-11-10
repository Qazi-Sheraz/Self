/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class EditProfile extends React.Component {
  state = {
    name: '',
    password: '',
    user: {},
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({
      user: navProps,
      name: navProps.name,
      password: navProps.password,
    });
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
              EditProfile
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
              height: '60%',
              // backgroundColor: 'red',
              padding: 25,
            }}>
            <TextInput
              onChangeText={txt => this.setState({name: txt})}
              style={{
                // backgroundColor: '#fff',
                borderBottomWidth: 0.5,
                color: 'red',
              }}
              placeholder={'Name'}
              value={this.state.name}
            />
            <TextInput
              onChangeText={txt => this.setState({email: txt})}
              style={{
                // backgroundColor: '#fff',
                marginTop: 10,
                borderBottomWidth: 0.5,
                color: 'red',
              }}
              placeholder={'Email'}
              keyboardType={'email-address'}
              value={this.state.user.email}
            />
            <TextInput
              onChangeText={txt => this.setState({password: txt})}
              style={{
                // backgroundColor: '#fff',
                marginTop: 10,
                borderBottomWidth: 0.5,
                color: 'red',
              }}
              placeholder={'Password'}
              value={this.state.password}
              secureTextEntry
            />

            {/* Update */}
            <View
              style={{
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.replace('Dashboard');
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
                    fontSize: 18,
                  }}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
