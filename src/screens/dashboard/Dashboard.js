/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components';

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
    return (
      <View
        style={{
          //   backgroundColor: '#faf',
          flex: 1,
        }}>
        <NavHeader
          leftIc={'ios-arrow-back'}
          title={'Dashboard'}
          rightIc={'ios-list'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
          rightPressed={() => {
            console.warn('rightPressed');
          }}
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
              this.props.navigation.replace('BasicsTwo');
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
              }}>
              EditProfile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}