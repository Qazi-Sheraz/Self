/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInput, AppBtn, NavHeader} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import validator from 'email-validator';
export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    secureTxt: true,

    modalVisible: false,
    inEmail: '',
    inPassword: '',
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
    const res = validator.validate(this.state.email);
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.state.name === ''
      ? alert('Name is required')
      : // : !res
      res === false
      ? alert('Email is required')
      : this.state.password.length < 8
      ? alert('Password must contain 8 characters')
      : AsyncStorage.setItem('userData', JSON.stringify(data), () => {
          Alert.alert(
            'Alert....',
            'Your account have been created successfully please Sign in',
            [
              {
                text: 'No',
              },
              {text: 'Yes', onPress: () => this.setState({modalVisible: true})},
            ],
          );
        });
  };
  signIn = () => {
    AsyncStorage.getItem('userData', (err, res) => {
      if (!err && res !== null) {
        const data = JSON.parse(res);
        if (data.email === this.state.inEmail) {
          if (data.password === this.state.inPassword) {
            this.props.navigation.replace('TabNavigator');
          } else {
            alert('Incorrect password');
          }
        } else {
          alert('Invalid email');
        }
      } else {
        alert('error');
      }
    });
  };

  render() {
    return (
      <View
        style={{
          // backgroundColor: '#fad',
          flex: 1,
        }}>
        <NavHeader title={'SignUp'} />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 2,
          }}>
          <View
            style={{
              height: '20%',
              // width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                // backgroundColor: '#faf',
                height: 140,
                width: 140,
              }}>
              <Image
                // source={{
                //   uri: '',
                // }}
                source={require('../../asserts/user.jpg')}
                style={{
                  resizeMode: 'contain',
                  height: '80%',
                  width: '80%',
                }}
              />
            </View>
          </View>

          {/* {Bottom View} */}
          <View
            style={{
              height: 350,
              // backgroundColor: 'red',
              padding: 20,
            }}>
            <AppInput
              ic={'ios-person'}
              onChangeText={txt => this.setState({name: txt})}
              placeholder={'Name'}
            />
            <AppInput
              ic={'ios-mail'}
              onChangeText={txt => this.setState({email: txt})}
              placeholder={'Email'}
              st={{
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <View
              style={{
                height: 55,
                // backgroundColor: '#faf',
                flexDirection: 'row',
                borderWidth: 0.5,
                borderRadius: 10,
              }}>
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  // backgroundColor: '#aaf',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRightWidth: 0.5,
                }}>
                <Ionicons name={'lock-closed'} size={20} color={'red'} />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#faf',
                }}>
                <TextInput
                  onChangeText={txt => this.setState({password: txt})}
                  style={{
                    height: '100%',
                    width: '100%',
                    padding: 10,
                  }}
                  placeholder={'Password'}
                  secureTextEntry={this.state.secureTxt}
                />
              </View>
              {this.state.password !== '' ? (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({secureTxt: !this.state.secureTxt})
                  }
                  style={{
                    height: '100%',
                    width: '10%',
                    // backgroundColor: '#aaf',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name={
                      this.state.secureTxt ? 'eye-outline' : 'eye-off-outline'
                    }
                    size={20}
                    color={'red'}
                  />
                </TouchableOpacity>
              ) : null}
            </View>

            {/* create Account */}
            <View
              style={{
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  // backgroundColor: '#faf',
                  marginTop: 20,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <AppBtn
                  onPress={() => this.createUser()}
                  txt={'Create Account'}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: '#faf',
              height: 100,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginTop: 5,
              }}>
              Already have an account?{'  '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <Modal
          animationType="slide"
          // animationType="fade"
          // transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View
            style={{
              // backgroundColor: '#fad',
              flex: 1,
            }}>
            <NavHeader
              title={'Sign In'}
              leftIc={'ios-arrow-back'}
              leftPressed={() => {
                this.setState({modalVisible: false});
              }}
            />
            <KeyboardAwareScrollView
              contentContainerStyle={{
                flexGrow: 2,
              }}>
              <View
                style={{
                  height: h('15%'),
                  // width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />

              {/* {Bottom View} */}
              <View
                style={{
                  flex: 1,
                  // backgroundColor: '#AFA',
                  padding: h('1.5'),
                }}>
                <AppInput
                  ic={'ios-mail'}
                  onChangeText={txt => this.setState({inEmail: txt})}
                  placeholder={'Email'}
                  st={{
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                <View
                  style={{
                    height: 55,
                    // backgroundColor: '#faf',
                    flexDirection: 'row',
                    borderWidth: 0.5,
                    borderRadius: 10,
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '15%',
                      // backgroundColor: '#aaf',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRightWidth: 0.5,
                    }}>
                    <Ionicons name={'lock-closed'} size={20} color={'red'} />
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: '75%',
                      // backgroundColor: '#faf',
                    }}>
                    <TextInput
                      onChangeText={txt => this.setState({inPassword: txt})}
                      style={{
                        height: '100%',
                        width: '100%',
                        padding: 10,
                      }}
                      placeholder={'Password'}
                      secureTextEntry={this.state.secureTxt}
                    />
                  </View>
                  {this.state.password !== '' ? (
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({secureTxt: !this.state.secureTxt})
                      }
                      style={{
                        height: '100%',
                        width: '10%',
                        // backgroundColor: '#aaf',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Ionicons
                        name={
                          this.state.secureTxt
                            ? 'eye-outline'
                            : 'eye-off-outline'
                        }
                        size={20}
                        color={'red'}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>

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
                {/* log In */}
                <View
                  style={{
                    marginTop: h('10'),
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      // backgroundColor: '#faf',
                      marginTop: 20,
                      width: '100%',
                      alignItems: 'center',
                    }}>
                    <AppBtn onPress={() => this.signIn()} txt={'Sign In'} />
                  </View>
                </View>
                <View
                  style={{
                    // backgroundColor: '#faf',
                    height: h('5'),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: h('1'),
                  }}>
                  <Text
                    style={{
                      marginTop: h('0.7'),
                    }}>
                    Don't have an account?{'  '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({modalVisible: false});
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 18,
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}
