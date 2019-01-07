import React, {Component} from 'react';
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import { Head, Button, Link, Input, Icons,UnderText} from './components';
import * as firebase from 'firebase';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';



class RegisterForm extends Component{

  componentWillMount(){
  firebase.initializeApp({
    apiKey: "AIzaSyAxpbP_j5KmxabSjlYXlSPQ3JPg_gCX9XA",
    authDomain: "postcrossing-app.firebaseapp.com",
    databaseURL: "https://postcrossing-app.firebaseio.com",
    projectId: "postcrossing-app",
    storageBucket: "postcrossing-app.appspot.com",
    messagingSenderId: "25868299726"
  });
}



 state = {
   username:'',
   email:'',
   password:'',
   error: '',
   loading: false
 }

onPressSignUpButton(){
  this.setState({
    loading: true
  })
   const {email, password, username} = this.state
   firebase.auth().createUserWithEmailAndPassword(email, password).then( () =>
    {
      currentUser = firebase.auth().currentUser
      firebase.database().ref('/'+currentUser.uid).set({
        email: email,
        username: username
      })
      this.setState({
        loading: false
      })
    })
}


  render(){
    return(
      <View style={{ height: '100%', width: '100%'}}>

          <View style={styles.mainWindow}>
            <Head text='SignUp' />

            <Input label= 'Username'
            value = {this.state.username}
            onChangeText= {username => this.setState({username})}
            />

            <Input label= 'E-mail'
            value = {this.state.email}
            onChangeText= {email => this.setState({email})}
            />

            <Input label= 'Password'
            value= {this.state.password}
            onChangeText={ password => this.setState({ password })}
            secureTextEntry
            />
            <UnderText></UnderText>
            <Button onPress={this.onPressSignUpButton.bind(this)}>Sign Up</Button>
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

export {RegisterForm}
