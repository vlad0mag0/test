import React, {Component} from 'react';
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Head, Button, Link, Input, Icons} from './components';
import {LogIn} from './LogIn'
import {RegisterForm} from './RegisterForm'


class SignInWindow extends Component{
  state={
        currentForm: <LogIn onPress={this.onPressRegLink.bind(this)}/>
        }

onPressRegLink(){
  this.setState({
    currentForm: <RegisterForm stateApp = {this.props.stateApp} />
  })
}

  render(){
    return(
      <View>
      <ImageBackground source={{uri : 'https://i.pinimg.com/564x/95/de/3e/95de3ea2e43ea85ecbdaa333574761c3.jpg'}} style={{height:'100%', width: '100%'}}>
          {this.state.currentForm}
      </ImageBackground>
      </View>
    )
  }
}








export {SignInWindow};
