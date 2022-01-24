/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppBtn, NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class EditProfile extends React.Component {
  state = {
    name: '',
    password: '',
    email: '',
    user: {},
  };

  componentDidMount = () => {
    const data = this.props.route.params;
    this.setState({
      user: data,
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };
  updateUser = () => {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    AsyncStorage.setItem('userData', JSON.stringify(data), () => {
      this.props.navigation.replace('TabNavigator');
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
          <NavHeader
            leftIc={'ios-arrow-back'}
            title={'EditProfile'}
            rightIc={'ios-list'}
            leftPressed={() => {
              this.props.navigation.goBack();
            }}
            rightPressed={() => {
              console.warn('rightPressed');
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
              value={this.state.email}
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

            <AppBtn
              txt={'UpDate'}
              onPress={() => this.updateUser()}
              st={{
                marginTop: 20,
              }}
            />
          </View>
          <ActionButton
            buttonColor="black"
            onPress={() => {
              this.props.navigation.replace('TabNavigator');
            }}
            renderIcon={() => (
              <Ionicons name="ios-home" style={{fontSize: 20, color: '#fff'}} />
            )}
            useNativeFeedback
            // position={'left'}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
