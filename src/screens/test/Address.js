/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {AppBtn, NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';

export class Address extends React.Component {
  state = {
    data: [
      {
        home: 'Home',
        address: 'house no 9 ',
      },
    ],
    filteredData: [
      {
        home: 'Home',
        address: 'House no 9',
      },
    ],
    loggedIn: true,
  };
  renderDesign = item => (
    <View
      style={{
        flex: 1,
      }}>
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
            height: '25%',
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
            <Ionicons name={'ios-home'} size={30} color={'red'} />
          </View>
          <View
            style={{
              //   backgroundColor: '#000',
              height: '100%',
              width: '80%',
            }}>
            <View
              style={{
                height: '40%',
                width: '100%',
                // backgroundColor: '#af3',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3.5'),
                }}>
                {item.home}
              </Text>
            </View>

            <View
              style={{
                height: '60%',
                width: '100%',
                // backgroundColor: 'green',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('2.5'),
                }}>
                {item.address}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: '#aaa',
            height: '25%',
            width: '100%',
            flexDirection: 'row',
            // alignItems: 'center',
            borderWidth: h('0.085'),
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
            <Ionicons name={'ios-briefcase'} size={30} color={'red'} />
          </View>

          <View
            style={{
              //   backgroundColor: '#000',
              height: '100%',
              width: '80%',
            }}>
            <View
              style={{
                height: '40%',
                width: '100%',
                // backgroundColor: '#af3',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3.5'),
                }}>
                {item.work}
              </Text>
            </View>

            <View
              style={{
                height: '60%',
                width: '100%',
                // backgroundColor: 'green',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('2.5'),
                }}>
                {item.address}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // backgroundColor: '#aaa',
            height: '25%',
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
            <Ionicons name={'ios-location-outline'} size={30} color={'red'} />
          </View>
          <View
            style={{
              //   backgroundColor: '#000',
              height: '100%',
              width: '80%',
            }}>
            <View
              style={{
                height: '40%',
                width: '100%',
                // backgroundColor: '#af3',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('3.5'),
                }}>
                {item.other}
              </Text>
            </View>

            <View
              style={{
                height: '60%',
                width: '100%',
                // backgroundColor: 'green',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: h('2.5'),
                }}>
                {item.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  searchFilterFunction = txt => {
    const newData = this.state.data.filter(item => {
      const itemData = ` ${item.home.toUpperCase()} ${item.work.toUpperCase()} ${
        item.other
      }`;
      const searchTxt = txt.toUpperCase();
      return itemData.indexOf(searchTxt) > -1;
    });
    this.setState({filteredData: newData});
  };
  render() {
    return (
      <View
        style={{
          //   backgroundColor: '#fafa',
          flex: 1,
        }}>
        <NavHeader
          leftIc={'ios-arrow-back'}
          title={'Address'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <FlatList
          style={{
            margin: h('1%'),
          }}
          // inverted

          data={this.state.filteredData}
          renderItem={({item, index}) => this.renderDesign(item, index)}
          //   ItemSeparatorComponent={() => this.separator()}
          keyExtractor={(index, item) => item.toString()}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: h('2'),
          }}>
          <AppBtn
            txt={'Add New Address'}
            btst={{
              backgroundColor: 'red',
            }}
          />
        </View>
      </View>
    );
  }
}
