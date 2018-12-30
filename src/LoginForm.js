import React, {Component} from 'react';
import Textfield from 'react-mdl';  // import Textfield from 'react-mdl/lib/Textfield'
import { StyleSheet, View } from 'react-native'; // сначала нужно установить эту библиотеку npm install --save react-mdl
import { Head} from './components'// https://tleunen.github.io/react-mdl/  сайт этой библиотеки


class LoginForm extends Component {

  render(){
    return(
        <View style={styles.mainWindow}>
          <Head text='Sign in' />
          <Textfield
              onChange={() => {}}
              label="Text..."
              floatingLabel
              style={{width: '200px'}}
          />
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
    elevation: 2
  }
})

export default LoginForm;
