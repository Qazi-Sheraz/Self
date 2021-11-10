/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BasicsTwo} from '../basicsTwo';

export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  sendData = (param, param2) => {
    console.warn('This is param =    ' + param);
    console.warn('This is param2=   ' + param2);
  };
  // sendData2 = SignIn => {
  //   console.warn('Sign In= ' + SignIn);
  // };
  createUser = () => {
    //   if (
    //     this.state.name === '' ||
    //     this.state.email === '' ||
    //     this.state.password === ''
    //   ) {
    //     alert('All fields are required');
    //   } else {
    //     alert('All ok');
    //   }
    // };
    // if (this.state.name === '')
    // {alert('name are required');}
    //  else {
    //   if (this.state.email === '')
    // {alert(' email are required');
    // }}

    //   else{
    //   if(this.state.password === '')
    //   {
    //     alert('password is inviled');
    //   }else{
    //
    //   alert('All ok');
    // }
    // };
    const navProps = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.state.name === ''
      ? alert('Name is required')
      : this.state.email === ''
      ? alert('Email is required')
      : this.state.password.length < 8
      ? alert('Password must contain 8 characters')
      : this.props.navigation.navigate('Dashboard', navProps);
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
              secureTextEntry
            />
            {/* Forget pass... */}
            <TouchableOpacity
              onPress={() => {
                console.warn('1');
                console.log('2');
              }}
              style={{
                marginTop: 10,
                // marginLeft:10,
                alignItems: 'flex-end',
              }}>
              <Text>Forget Password ?..</Text>
            </TouchableOpacity>
            {/* create Account */}
            <View
              style={{
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                // onPress={() => {
                //   const navData = this.state.name;
                // this.props.navigation.navigate('Dashboard', navData);
                // }}
                onPress={() => this.createUser()}
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
            {/* SignIN */}
            <View
              style={{
                // backgroundColor:'#faf',
                height: '10%',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                }}>
                Already have an Account?{' '}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  // const SignIn = 'signIn';
                  // this.sendData2(SignIn);
                  this.props.navigation.navigate('BasicsTwo');
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
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
