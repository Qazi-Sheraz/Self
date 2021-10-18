/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#faf',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'yellow',
          height: '50%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#3aa8c1',
            height: 50,
            width: 50,
          }}></View>
      </View>

      <View
        style={{
          backgroundColor: '#000',
          height: '20%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 40,
            width: 70,
          }}></View>
      </View>

      <View
        style={{
          backgroundColor: '#afa',
          height: '20%',
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#db5a6b',
            height: 40,
            width: 70,
          }}></View>
      </View>

      <View
        style={{
          backgroundColor: '#808080',
          height: '10%',
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'blue',
            height: 20,
            width: 70,
          }}></View>
      </View>
    </View>
  );
};
export default App;
