/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class List extends React.Component {
  state = {
    data: [
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'ertyuiop',

        phone: '0301234567',
        age: '25',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Alidfgh',
        fName: 'Umer',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'sdfghjkl',
        fName: 'Ujkl;mer',
        phone: '03023456789',
        age: '25',
        img: require('../../asserts/b4.jpg'),
      },
    ],
    loggedIn: true,
  };
  renderDesign = item => (
    <View
      style={{
        height: h('11%'),
        // backgroundColor: '#aaf',
        flexDirection: 'row',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <View
        style={{
          height: '100%',
          width: '20%',
          // backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRightWidth:0.5,
        }}>
        <Image
          source={item.img}
          style={{
            height: h('10%'),
            width: h('10%'),
            resizeMode: 'cover',
            borderRadius: h('5%'),
          }}
        />
      </View>

      <View
        style={{
          height: '100%',
          width: '80%',
          // backgroundColor: '#a3a',
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            // backgroundColor: '#af3',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '70%',
              // backgroundColor: 'red',
              justifyContent: 'center',
              paddingLeft: h('2%'),
            }}>
            <Text>Name: {item.name}</Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '30%',
              // backgroundColor: 'green',
              justifyContent: 'center',
            }}>
            <Text>Age: {item.age}</Text>
          </View>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            // backgroundColor: '#a81',
            justifyContent: 'center',
            paddingLeft: h('2%'),
          }}>
          <Text>Phone: {item.phone}</Text>
        </View>
      </View>
    </View>
  );

  separator = () => (
    <View
      style={{
        height: h('1%'),
      }}
    />
  );

  render() {
    return (
      <ImageBackground
        source={require('../../asserts/list.jpg')}
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'List'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.setState({loggedIn: !this.state.loggedIn});
          }}
        />
        <FlatList
          style={{
            margin: h('1%'),
          }}
          data={this.state.data}
          renderItem={({item}) => this.renderDesign(item)}
          ItemSeparatorComponent={() => this.separator()}
          keyExtractor={(index, item) => item.toString()}
        />
      </ImageBackground>
    );
  }
}
