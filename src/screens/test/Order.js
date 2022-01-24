/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {AppInput, NavHeader, AppBtn} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Order extends React.Component {
  state = {
    data: [
      {
        address: 'Sarwar Dahi Bhally Gol Chowok',
        itemName: 'Bannu Palloo',
        price: '640',
        date: 'feb',
      },
    ],
    filteredData: [
      {
        address: 'Sarwar Dahi Bhally Gol Chowok',
        itemName: 'Bannu Palloo',
        price: '640',
        date: 'feb',
      },
    ],
    loggedIn: true,
  };
  renderDesign = item => (
    <View
      style={{
        height: h('20%'),
        //   backgroundColor: '#aaf',
        flexDirection: 'row',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <View
        style={{
          height: '100%',
          width: '60%',
          // backgroundColor: '#a3a',
          paddingLeft: h('1'),
        }}>
        <View
          style={{
            height: '40%',
            width: '100%',
            //   backgroundColor: '#af3',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: h('3.5'),
            }}>
            {item.address}
          </Text>
        </View>

        <View
          style={{
            height: '30%',
            width: '100%',
            //   backgroundColor: 'green',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: h('2.5'),
            }}>
            {item.itemName}
          </Text>
        </View>

        <View
          style={{
            height: '30%',
            width: '100%',
            //   backgroundColor: '#a81',
            justifyContent: 'center',
            paddingLeft: h('2%'),
          }}>
          <Text
            style={{
              fontSize: h('2.5'),
            }}>
            {item.date}
          </Text>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          height: '100%',
          width: '40%',
        }}>
        <View
          style={{
            //   backgroundColor: 'blue',
            height: '50%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: h('3'),
            }}>
            Rs: {item.price}
          </Text>
        </View>
        <View
          style={{
            //   backgroundColor: '#f2d',
            height: '50%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppBtn onPress={() => this.remove()} txt={'ReOrder'} />
        </View>
      </View>
    </View>
  );

  add = () => {
    const newItem = {
      address: 'Sarwar Dahi Bhally Gol Chowok',
      itemName: 'Bannu Palloo',
      price: '640',
      date: 'feb',
    };

    this.setState(
      prevState => ({
        filteredData: [...prevState.filteredData, newItem],
      }),

      () => {
        console.warn('done');
      },
    );
  };

  remove = item => {
    let arr = [...this.state.filteredData];

    var ind = arr.findIndex(element => element.address === item.address);
    if (ind > -1) {
      arr.splice(ind, 1);
      this.setState({filteredData: arr});
    }
  };

  searchFilterFunction = txt => {
    const newData = this.state.data.filter(item => {
      const itemData = ` ${item.address.toUpperCase()} ${item.itemName.toUpperCase()} ${
        item.price
      }`;
      const searchTxt = txt.toUpperCase();
      return itemData.indexOf(searchTxt) > -1;
    });
    this.setState({filteredData: newData});
  };
  separator = () => (
    <View
      style={{
        height: h('1%'),
      }}
    />
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Orders'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
          rightIc={'basket'}
          rightPressed={() => {
            this.add();
          }}
        />

        <FlatList
          style={{
            margin: h('1%'),
          }}
          // inverted

          data={this.state.filteredData}
          renderItem={({item, index}) => this.renderDesign(item, index)}
          ItemSeparatorComponent={() => this.separator()}
          keyExtractor={(index, item) => item.toString()}
        />
      </View>
    );
  }
}
