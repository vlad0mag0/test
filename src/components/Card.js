import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {

  const {cardStyles} = styles;

  return(
    <View style={cardStyles}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cardStyles:{
    marginLeft:10,
    marginRight: 10
  }
})

export {Card};
