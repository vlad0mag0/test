import React, {Component} from 'react';
import {ActivityIndicator, Button, Clipboard, Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {ImagePicker, Permissions} from 'expo';
import PhotoLoad from './../componentsAdress/PhotoLoad'
import CustomSet from './../../CustomSet.js'
import * as firebase from 'firebase';



class Adress extends Component {


  render(){

    return(

      <View style={styles.AboutTabStyles}>

      <View style={styles.blockOfAdress}>
          <Text style={styles.idOfCard}>{this.props.cardId}</Text>
          <Text style={styles.adressStyles}>{this.props.adress}</Text>
      </View>
      </View>
    )
  }

}

styles = StyleSheet.create({
  AboutTabStyles:{
    paddingTop: 2 ,
    paddingRight: 10,
    paddingLeft: 40,
    paddingBottom: 25,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25,
    marginBottom: 20,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 2,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  idOfCard:{
    color: '#FD7992',
    fontFamily:'roboto-font-bold',
    fontSize: 16,
    marginBottom: 10,
  },
  adressStyles:{
    color: '#1d346c',
    fontFamily:'roboto-font-boldItalic',
    fontSize: 16,
    lineHeight: 22
  },
  uploadStyles : {
    marginLeft: 25,
    marginTop: 2,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: 'red'
  },
  blockOfAdress:{
    width: "100%"
  }
})

export default Adress
