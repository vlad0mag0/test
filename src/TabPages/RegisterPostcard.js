import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import {Button} from './../components/Button';
import * as firebase from 'firebase';
import Textarea from 'react-native-textarea';


export default class App extends Component {
  state ={
    text: '',
    valueOfCountry:'',
    valueOfId:''
  }

  onPressRegisterCard(){
    const cardId= this.state.valueOfCountry +  this.state.valueOfId

    let ref = firebase.database().ref('Users/' +  this.props.uid + '/waitFor')
            .once('value')
          .then( response => {
        let cards = Object.values(response);
              cards.forEach( card => {
                  console.log(card)
              })
          })
        }

  onChange = (value) => {
    this.setState({ message: value });
  }

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.containerInput}>
          <TextInput
            style={styles.country}
            underlineColorAndroid={'blue'}
            placeholder="AA"
            maxLength = {2}
            value={this.state.valueOfCountry}
            onChangeText={ valueOfCountry => this.setState({valueOfCountry}) }
          />

          <TextInput
            style={styles.id}
            underlineColorAndroid={'blue'}
            placeholder="NUMBER"
            maxLength = {6}
            value={this.state.valueOfId}
            onChangeText={ valueOfId => this.setState({valueOfId}) }
          />
      </View>


        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          onChangeText={this.onChange}
          defaultValue={this.state.text}
          maxLength={120}
          placeholder={'好玩有趣的，大家同乐，伤感忧闷的，大家同哭。。。'}
          placeholderTextColor={'#c7c7c7'}
          underlineColorAndroid={'transparent'}
        />

        <Button onPress={ () => this.onPressRegisterCard()}><Text>Register</Text></Button>
    </View>
  )
}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
      marginTop:20,
      marginBottom: 20,
      flexDirection: 'row',
      width:'100%',
      height: 40,
 },
 country: {
   paddingLeft:5,
   width: 30,
   height: 50,
  },
  id: {
    paddingLeft:5,
    width: 100,
    height: 50,
   },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});
