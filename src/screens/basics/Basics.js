import React from 'react';
import {View, Text} from 'react-native';

export class Basics extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#faf',
          flex: 1,
        }}>
        {/* {Top View} */}
        <View
          style={{
            backgroundColor: 'red',
            height: '40%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {/* {Left View } */}
          <View
            style={{
              backgroundColor: '#afa',
              height: '100%',
              width: '40%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              padding: 20,
            }}>
            {/* {innerView} */}
            <View
              style={{
                backgroundColor: '#000',
                height: 50,
                width: 50,
              }}></View>
            <View
              style={{
                backgroundColor: '#808',
                height: 50,
                width: 50,
              }}></View>
          </View>
          {/* {Right View} */}
          <View
            style={{
              backgroundColor: '#808080',
              height: '100%',
              width: '40%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingTop: 10,
            }}>
            <View
              style={{
                backgroundColor: '#000',
                height: 50,
                width: 50,
              }}></View>
            <View
              style={{
                backgroundColor: '#808',
                height: 50,
                width: 50,
              }}></View>
          </View>
        </View>
        {/* {Middle View } */}
        <View
          style={{
            backgroundColor: '#d88',
            height: '40%',
            width: '100%',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '60%',
              width: '60%',
              backgroundColor: '#aff',
              // justifyContent:''
              paddingLeft: 10,
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: '#000',
                margin: 10,
                // marginTop:10,
                // marginBottom:10,
                // marginLeft:10,
                // marginRight:10,
              }}></View>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'red',
                // margin:10,
                // marginTop:10,
                // marginBottom:10,
                // marginLeft:10,
                // marginRight:10,
              }}></View>
          </View>
        </View>
        {/* {Bottom View } */}
        <View
          style={{
            backgroundColor: '#f24',
            height: '20%',
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 29,
              color: '#fff',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
            // numberOfLines={1}
          >
            hello Sherrii {'\n'} This is MY Laptop Hp 1030 ELITEBOOK G2
          </Text>
        </View>
      </View>
    );
  }
}
