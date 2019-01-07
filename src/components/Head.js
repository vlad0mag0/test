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
    paddingTop: 23,
    paddingBottom: 23,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: '#33B5E5',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0



  },
  textStyle:{
    fontSize: 20,
    color: 'white'
  }
})

export {Head}
