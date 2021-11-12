/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppBtn, NavHeader} from '../../components';

export class EditProfile extends React.Component {
  state = {
    name: '',
    password: '',
    // email: '',

    user: {},
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({
      user: navProps,
      // email: navProps.email,
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

            <AppBtn
              txt={'UpDate'}
              onPress={() => this.props.navigation.replace('Dashboard')}
              st={{
                marginTop: 20,
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
