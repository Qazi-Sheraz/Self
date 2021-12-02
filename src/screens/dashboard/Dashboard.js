/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Dashboard extends React.Component {
  state = {
    user: {},
    name: '',
    email: '',
    password: '',
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    if (navProps !== undefined) {
      this.setState({
        user: navProps,
        name: navProps.name,
        email: navProps.email,
        password: navProps.password,
      });
      // console.warn('yes');
    } else {
      // console.warn('kick');
    }
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../../asserts/Rnipol.jpg')}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            //   backgroundColor: '#faf',
            flex: 1,
          }}>
          <NavHeader
            title={'Dashboard'}
            leftIc={'ios-list'}
            leftPressed={() => {
              navigation.openDrawer();
            }}
            rightIc={'md-log-out-outline'}
            rightPressed={() => {
              AsyncStorage.removeItem('userData', () => {
                this.props.navigation.replace('SignUp');
              });
            }}
            custom
          />
          <View
            style={{
              // backgroundColor: '#808',
              height: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('List');
              }}
              style={{
                height: '90%',
                width: '90%',
                borderRadius: 15,
                borderColor: 'red',
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                List
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // backgroundColor: '#808',
              height: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MultiList');
              }}
              style={{
                height: '90%',
                width: '90%',
                borderRadius: 15,
                borderColor: 'red',
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Multi List
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // backgroundColor: '#808',
              height: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ColumnList');
              }}
              style={{
                height: '90%',
                width: '90%',
                borderRadius: 15,
                borderColor: 'red',
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Column List
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // backgroundColor: '#808',
              height: '15%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                const navProps = {
                  name: this.state.name,
                  email: this.state.email,
                  password: this.state.password,
                };
                this.props.navigation.navigate('EditProfile', navProps);
              }}
              style={{
                height: '90%',
                width: '90%',
                borderRadius: 15,
                borderColor: 'red',
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                EditProfile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
