import React, {Component} from 'react'
import {View,TouchableOpacity, StyleSheet, Text} from 'react-native'


class Button extends Component{

render(){
  return(
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
}

const styles= StyleSheet.create({
  buttonStyle:{
    height: 45,
    alignSelf: 'stretch',
    backgroundColor:'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#33B5E5',
    marginLeft: 25,
    marginRight: 25,
    marginTop:10,
    marginBottom:8
  },
  textStyle:{
    alignSelf: 'center',
    color:'#33B5E5',
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 10
  }
})

export {Button}
