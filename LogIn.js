import React, {Component} from 'react';
import { StyleSheet, View, Text, ImageBackground, StatusBar} from 'react-native';
import { Head, Button, Link, Input, Icons} from './components';
import * as firebase from 'firebase';
import {Account} from "./AccountUser's";




class LogIn extends Component{

 state = {
   email:'',
   password:''
 }

onPressLogInButton(){
  const {email, password} = this.state
  firebase.auth().signInWithEmailAndPassword(email, password).then( () =>
  {
    this.props.updateMainView(<Account/>)
  })
}

  render(){
    return(
      <View style={{ height: '100%', width: '100%'}}>
          <View style={styles.mainWindow}>
            <Head text='Log in' />

            <Input label= 'E-mail'
            value = {this.state.email}
            onChangeText= {email => this.setState({email})}
            />

            <Input label= 'Password'
            value= {this.state.password}
            onChangeText={ password => this.setState({ password })}
            secureTextEntry
            />

              <Button onPress={this.onPressLogInButton.bind(this)}><Text style={{color:'#33B5E5', fontSize: 16}}>Log in</Text></Button>
              <View style = {styles.textBox}>
                <Text style={styles.textColor}>Not a member?</Text>
                <Link onPress={this.props.onPress}>Register</Link>
              </View>
              <View style = {styles.textBox}>
                <Text style={styles.textColor}>or sign in with:</Text>
              </View>
              <View style={styles.iconString}>
                <Icons name="facebook-with-circle" size={40} color="#3B5998"/>
                <Icons name='twitter-with-circle' size={40} color="#55ACEE"/>
                <Icons name="linkedin-with-circle" size={40} color="#0082CA"/>
                <Icons name="github-with-circle" size={40} color="#333333"/>
              </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainWindow : {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 2,
    backgroundColor: 'white'
  },
  textColor : {
    color: '#959595',
    fontSize: 16
  },
  textBox:{
    flexDirection: 'row',
    justifyContent:'center' ,
    alignItems:'center',
    paddingTop: 6,
    paddingBottom: 6,
  },
  iconString: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 5
  }
})

export {LogIn}
