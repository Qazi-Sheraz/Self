/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {NavHeader, AppBtn} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export class ImgPick extends React.Component {
  state = {
    galleryImg: '',
    cameraImg: '',
  };

  fromGallery = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else {
        // actual URL of image
        const source = response.assets[0].uri;

        this.setState({
          galleryImg: source,
        });
      }
    });
  };

  fromCamera = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.errorCode) {
        console.warn('ImagePicker Error: ', response.errorMessage);
      } else {
        // actual URL of image
        const source = response.assets[0].uri;

        this.setState({
          cameraImg: source,
        });
      }
    });
  };

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.fromCamera();
      } else {
        alert('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <View
        style={{
          //   backgroundColor: '#faf',
          flex: 1,
        }}>
        <NavHeader
          title={'ImagePicker'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.fromGallery();
          }}
          style={{
            height: '30%',
            width: '100%',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: '#Faf',
            marginBottom: h('10'),
          }}>
          {this.state.galleryImg === '' ? (
            <Text>Select Image From Gallery</Text>
          ) : (
            <Image
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
              }}
              source={{uri: this.state.galleryImg}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.requestCameraPermission();
          }}
          style={{
            height: '30%',
            width: '100%',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: '#Faf',
          }}>
          {this.state.cameraImg === '' ? (
            <Text>Select Image By Camera</Text>
          ) : (
            <Image
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
              }}
              source={{uri: this.state.cameraImg}}
            />
          )}
        </TouchableOpacity>

        <AppBtn
          onPress={() => {
            Alert.alert('Alert....', 'Select One Option', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
              },
              {
                text: 'Camera',
                onPress: () => this.fromCamera(),
              },
              {text: 'Gallery', onPress: () => this.fromGallery()},
            ]);
          }}
          txt={'Select Image'}
          st={{
            marginTop: h('5%'),
          }}
        />
      </View>
    );
  }
}
