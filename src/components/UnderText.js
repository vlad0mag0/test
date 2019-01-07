import React from 'react';
import {Text, StyleSheet} from 'react-native'

const UnderText = (props) => {
  return(<Text style={styles.textStyle}>{props.children}</Text>)
}

const styles=StyleSheet.create({
  textStyle:{
    color: '#6F6F6F',
    fontSize:10
    }
})

export {UnderText};
