/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class ColumnList extends React.Component {
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
  };
  // renderDesign = (item, index) => (
  //   <TouchableOpacity
  //     onPress={() => this.props.navigation.navigate('DetailsScreen', item)}>
  //     <View
  //       style={{
  //         height: h('10%'),
  //         width: w('70%'),
  //         // backgroundColor: '#aaf',

  //         marginRight: h('2%'),
  //         marginLeft: index === 0 ? h('2%') : 0,
  //         flexDirection: 'row',
  //         borderWidth: h('0.1%'),
  //         borderRadius: h('1%'),
  //         borderColor: 'grey',
  //       }}>
  //       <View
  //         style={{
  //           height: '100%',
  //           width: '20%',
  //           // backgroundColor: '#faf',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           overflow: 'hidden',
  //           borderRightWidth: 0.5,
  //         }}>
  //         <Image
  //           source={item.img}
  //           style={{
  //             height: h('10%'),
  //             width: h('10%'),
  //             resizeMode: 'cover',
  //             borderRadius: h('5%'),
  //           }}
  //         />
  //       </View>

  //       <View
  //         style={{
  //           height: '100%',
  //           width: '80%',
  //           // backgroundColor: '#a3a',
  //         }}>
  //         <View
  //           style={{
  //             height: '50%',
  //             width: '100%',
  //             // backgroundColor: '#af3',
  //             flexDirection: 'row',
  //           }}>
  //           <View
  //             style={{
  //               height: '100%',
  //               width: '70%',
  //               // backgroundColor: 'red',
  //               justifyContent: 'center',
  //               paddingLeft: h('2%'),
  //             }}>
  //             <Text>Name: {item.name}</Text>
  //           </View>
  //         </View>
  //         <View
  //           style={{
  //             height: '50%',
  //             width: '100%',
  //             // backgroundColor: '#a81',
  //             justifyContent: 'center',
  //             paddingLeft: h('2%'),
  //           }}>
  //           <Text>Phone: {item.phone}</Text>
  //         </View>
  //       </View>
  //     </View>
  //   </TouchableOpacity>
  // );

  renderColumn = item => (
    <View
      style={{
        height: h('10%'),
        width: w('21`%'),
        // backgroundColor: '#aaf',

        marginBottom: h('2%'),
        marginLeft: h('0.8%'),
        flexDirection: 'row',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
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
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'ColumnList'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        {/* <View
          style={{
            height: h('10%'),
            marginTop: h('2%'),
          }}>
          <FlatList
            style={{
              margin: h('1%'),
            }}
            horizontal
            data={this.state.data}
            renderItem={({item, index}) => this.renderDesign(item, index)}
            keyExtractor={(index, item) => item.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View> */}

        <View
          style={{
            height: h('85%'),
            backgroundColor: '#faf',
            // justifyContent: 'space-evenly',
          }}>
          <FlatList
            style={{
              margin: h('1%'),
            }}
            numColumns={4}
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
