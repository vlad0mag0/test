import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import MainApp from './MainApp'

export default class App extends React.Component{

state={
  uid:'9k1GjUp1aJWqmne7gJ234hopWm23'
}

render(){

  return(
      <MainApp uid = {this.state.uid} />
  )

}

}
