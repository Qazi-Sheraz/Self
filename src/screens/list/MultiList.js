/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class MultiList extends React.Component {
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
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },

      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '03023456723',
        age: '25',
        img: require('../../asserts/b1.jpg'),
      },
      {
        name: 'Hamad',
        fName: 'Umer Ali',
        phone: '0301234567',
        age: '21',
        img: require('../../asserts/b2.jpg'),
      },
      {
        name: 'Waleed',
        fName: 'Riaz',
        phone: '03023456780',
        age: '25',
        img: require('../../asserts/b3.jpg'),
      },
      {
        name: 'Talha',
        fName: 'Malik',
        phone: '03023456789',
        age: '27',
        img: require('../../asserts/b4.jpg'),
      },
    ],
    num: 1,
  };
  renderColumn = item => (
    <View
      style={{
        height: this.state.num === 1 ? h('25%') : h('10%'),
        width:
          this.state.num === 1
            ? h('57%')
            : this.state.num === 2
            ? h('29')
            : this.state.num === 3
            ? h('19')
            : h('13'),
        // backgroundColor: '#aaf',

        margin: h('0.5%'),
        // marginLeft: h('0.8%'),
        flexDirection: 'row',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
      <Image
        source={item.img}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
          // borderRadius: h('5%'),
        }}
      />
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'MultiList'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <View
          style={{
            height: h('15%'),
            // backgroundColor: '#808',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => this.setState({num: 1})}
            style={{
              backgroundColor: '#808080',
              height: '50%',
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('1'),
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({num: 2})}
            style={{
              backgroundColor: '#808080',
              height: '50%',
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({num: 3})}
            style={{
              backgroundColor: '#808080',
              height: '50%',
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({num: 4})}
            style={{
              backgroundColor: '#808080',
              height: '50%',
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
              }}>
              4
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: h('85%'),
            // backgroundColor: '#faf',
            // justifyContent: 'space-evenly',
          }}>
          <FlatList
            style={{
              margin: h('1%'),
            }}
            key={
              this.state.num === 1
                ? '1'
                : this.state.num === 2
                ? '2'
                : this.state.num === 3
                ? '3'
                : '4'
            }
            numColumns={
              this.state.num === 1
                ? 1
                : this.state.num === 2
                ? 2
                : this.state.num === 3
                ? 3
                : 4
            }
            data={this.state.data}
            renderItem={({item, index}) => this.renderColumn(item, index)}
            keyExtractor={(index, item) => item.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
