import React from 'react';
import {ActivityIndicator, Button, Clipboard, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ImagePicker, Permissions} from 'expo';
import uuid from 'uuid';
import CustomSet from './../../CustomSet.js'
import * as firebase from 'firebase';

console.disableYellowBox = true;

export default class PhotoLoad extends React.Component {
    state = {
        image: null,
        sent: this.props.sent,
        received: this.props.received,
        uid: 'TmVvm3mUyabp2lrQEaHMNQc6qKX2',
        uploading: false,
        uploadButton: <Button onPress={() => {this._pickImage()}} title="Выбрать картинку из библиотеки"/> ,
        makePhotoButton: <Button onPress={() => {this._takePhoto()}} title="Сделать фото"/>
    };

    _takePhoto = async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        this._handleImagePicked(pickerResult);
    };

    _pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        this._handleImagePicked(pickerResult);
    };

    async componentDidMount() {
        // здесь запрашиваются разрешения на доступ к фото
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        await Permissions.askAsync(Permissions.CAMERA);
    }

    render() {
        let image = this.state.image;

        return (
          <View>
                  {image ? null : (
                    <TouchableOpacity style = {
                      {
                      alignItems: 'center',
                      borderRadius: 7,
                      shadowColor: '#000',
                      shadowOpacity: 0.2,
                      shadowRadius: 7,
                      elevation: 3,
                      backgroundColor: 'white',
                      width: 105,
                      height: 67,
                      marginLeft: 26,
                    }
                    }
                    onPress={() => {this._pickImage()}} >
                      <CustomSet size= {40} color='black' name= 'cloud-upload' />
                      <Text> Upload image </Text>
                    </TouchableOpacity>
                  )}

                {this._maybeRenderImage()}
                {this._maybeRenderUploadingOverlay()}
        </View>
        );
    }

    _maybeRenderUploadingOverlay = () => {
        if (this.state.uploading) {
            return (
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                    ]}>
                    <ActivityIndicator color="#fff" animating size="large"/>
                </View>
            );
        }
    };

    _maybeRenderImage = () => {
        let image = this.state.image;
        if (!image) {
            return;
        }

        return (
          <View
          style = {
            {
            alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.2,
            borderRadius: 7,
            shadowRadius: 7,
            elevation: 3,
            width: 105,
            height: 67,
            marginLeft: 26,
          }
          }
          >
            <Image
            source={{uri: image}} style={{width: 105, height: 67, borderRadius: 7}}/>
          </View>
        );
    };

    afterLoading(){

  }

    _handleImagePicked = async pickerResult => {
        try {
            this.setState({uploading: true});
            if (!pickerResult.cancelled) {
                let uploadUrl = await uploadImageAsync(pickerResult.uri);
                this.setState({image: uploadUrl});
                this.afterLoading()
            }
        } catch (e) {
            console.log(e);
            alert('Upload failed, sorry :(');
        } finally {
            this.setState({uploading: false});
        }
    };
}

styles= StyleSheet.create({
  imageStyles:{
  }
})

async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

    const ref = firebase
        .storage()
        .ref()
        .child(uuid.v4());
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    let url = await snapshot.ref.getDownloadURL();
    console.log("Вот такой фот урл получился! ", url)
    return url;
}
