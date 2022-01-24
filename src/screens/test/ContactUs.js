/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';

export class ContactUs extends React.Component {
 

  render() {
    return (
      <View
        style={{
          //   backgroundColor: '#fafa',
          flex: 1,
        }}>
        <NavHeader
          leftIc={'ios-arrow-back'}
          title={'ContactUS'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <View
          style={{
            // backgroundColor: '#fafa',
            height: h('40%'),
            // justifyContent:'center',
            alignItems: 'center',
            marginTop: h('1'),
          }}>
          <Image
            // source={{
            //   uri: '',
            // }}
            source={require('../../asserts/job.jpg')}
            style={{
              resizeMode: 'center',

              height: h('30%'),
              width: '100%',
            }}
          />
          <Text
            style={{
              fontSize: h('4'),
              color: 'red',
            }}>
            we love hearing you
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: '#faa',
            height: h('60%'),
            padding: h('3'),
            // alignItems: 'center',
          }}>
          <View
            style={{
              // backgroundColor: '#aaa',
              height: '17%',
              width: '100%',
              flexDirection: 'row',
              // alignItems: 'center',
              borderWidth: h('0.08'),
              borderRadius: h('2'),
            }}>
            <View
              style={{
                // backgroundColor: '#23a',
                height: '100%',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name={'ios-mail'} size={35} color={'red'} />
            </View>
            <TextInput
              style={{
                // backgroundColor: 'red',
                height: '100%',
                width: '80%',
              }}
            />
          </View>
          <View
            style={{
              // backgroundColor: '#aaa',
              height: '17%',
              width: '100%',
              flexDirection: 'row',
              // alignItems: 'center',
              borderWidth: h('0.08'),
              borderRadius: h('2'),
              marginTop: h('1'),
              marginBottom: h('1'),
            }}>
            <View
              style={{
                // backgroundColor: '#23a',
                height: '100%',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name={'ios-call'} size={35} color={'red'} />
            </View>
            <TextInput
              style={{
                // backgroundColor: 'red',
                height: '100%',
                width: '80%',
              }}
              Tw
            />
          </View>
          <View
            style={{
              // backgroundColor: '#aaa',
              height: '17%',
              width: '100%',
              flexDirection: 'row',
              // alignItems: 'center',
              borderWidth: h('0.08'),
              borderRadius: h('2'),
            }}>
            <View
              style={{
                // backgroundColor: '#23a',
                height: '100%',
                width: '20%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name={'ios-location-outline'} size={35} color={'red'} />
            </View>
            <TextInput
              style={{
                // backgroundColor: 'red',
                height: '100%',
                width: '80%',
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
