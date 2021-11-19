/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class DetailsScreen extends React.Component {
  state = {
    data: {},
  };
  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({data: navProps});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'DetailsScreen'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <View
          style={{
            height: h('15'),
            width: '100%',
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={this.state.data.img}
            style={{
              height: h('13%'),
              width: h('13%'),
              resizeMode: 'cover',
              borderRadius: h('7%'),
            }}
          />
        </View>
        <View
          style={{
            height: h('8'),
            // backgroundColor: '#FAF',
            flexDirection: 'row',
            marginTop: h('1'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#808',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text>Name</Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aa2',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{this.state.data.name}</Text>
          </View>
        </View>
        <View
          style={{
            height: h('8'),
            // backgroundColor: '#FAF',
            flexDirection: 'row',
            marginTop: h('1'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#808',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text>Father Name</Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aa2',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{this.state.data.fName}</Text>
          </View>
        </View>
        <View
          style={{
            height: h('8'),
            // backgroundColor: '#FAF',
            flexDirection: 'row',
            marginTop: h('1'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#808',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text>Age</Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aa2',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{this.state.data.age}</Text>
          </View>
        </View>
        <View
          style={{
            height: h('8'),
            // backgroundColor: '#FAF',
            flexDirection: 'row',
            marginTop: h('1'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#808',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text>Phone</Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aa2',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{this.state.data.phone}</Text>
          </View>
        </View>
      </View>
    );
  }
}
