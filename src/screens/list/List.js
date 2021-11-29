/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {AppInput, NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    filteredData: [
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
    loggedIn: true,
  };
  renderDesign = (item, index) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('DetailsScreen', item)}>
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
            borderRightWidth: 0.5,
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
            width: '70%',
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
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Alert....',
              'Do you really want to delete this item?',
              [
                {
                  text: 'Ask Me Later',
                },
                {
                  text: 'No',
                },
                {text: 'Yes', onPress: () => this.remove(item)},
              ],
            );
          }}
          style={{
            height: '100%',
            width: '10%',
            // backgroundColor: '#fa8',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeftWidth: 0.2,
          }}>
          <Ionicons name={'trash'} size={h('3')} color={'red'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  add = () => {
    const newItem = {
      name: 'abcd',
      fName: 'user',
      phone: '0000000000',
      age: '25',
      img: require('../../asserts/b1.jpg'),
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

    var ind = arr.findIndex(element => element.name === item.name);
    if (ind > -1) {
      arr.splice(ind, 1);
      this.setState({filteredData: arr});
    }
  };

  searchFilterFunction = txt => {
    const newData = this.state.data.filter(item => {
      const itemData = ` ${item.name.toUpperCase()} ${item.fName.toUpperCase()} ${
        item.phone
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
      <ImageBackground
        source={require('../../asserts/list.jpg')}
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'List'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
          rightIc={'person'}
          rightPressed={() => {
            this.add();
          }}
        />
        <AppInput
          ic={'search'}
          placeholder={'Search Here'}
          st={{
            marginTop: h('1%'),
          }}
          onChangeText={txt => this.searchFilterFunction(txt)}
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
      </ImageBackground>
    );
  }
}
