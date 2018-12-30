import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/LoginForm'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
