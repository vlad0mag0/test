import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Head = ({text}) =>{

  const {headStyles, textStyle} = styles;
return(
  <View style={headStyles}>
      <Text style={textStyle}>{text}</Text>
  </View>
)
}

const styles = StyleSheet.create({
  headStyles:{
    justifyContent:'center' ,
    alignItems:'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: '#33B5E5',
    marginLeft: 1,
    marginRight: 1,
    marginTop: 0.8



  },
  textStyle:{
    fontSize: 20,
    color: 'white'
  }
})

export {Head}
