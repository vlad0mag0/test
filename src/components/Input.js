import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { TextField } from 'react-native-material-textfield';

class Input extends Component {

  constructor(props){
    super(props)
    this.labelHeight = 25
    this.paddingLabel = 0
    this.state = {
      secureTextEntry: props.secureTextEntry
    };
  }


  render() {

    return (
      <View style={styles.inputStyles}>
        <TextField
          secureTextEntry={this.state.secureTextEntry}
          containerStyle={{marginRight:0,
                          marginLeft:0
                                          }}
          labelHeight= {this.labelHeight}
    	    label = {this.props.label}
          labelPadding= {this.paddingLabel}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  inputStyles:{
    marginLeft: 30,
    marginRight: 30
  }
})


export {Input};
