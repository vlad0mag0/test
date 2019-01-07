import React from 'react';
import {View, TouchableOpacity,Text, StyleSheet} from 'react-native';

const Link = (props) =>{

  return(
    <TouchableOpacity style={styles.boxStyles} onPress={props.onPress}>
      <Text style={styles.textStyle}>
       {props.children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle:{
    color: "#689BD2",
    fontSize: 16
  },
  boxStyles:{
    marginLeft: 3
  }
})

export {Link}
