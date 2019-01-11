import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {SignInWindow} from './src/SignInWindow'

export default class App extends React.Component {
  state = {
    mainView: <SignInWindow stateApp = {this.mainView} />
  }



  render() {
    return (
      <View>
        {this.state.mainView}
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
