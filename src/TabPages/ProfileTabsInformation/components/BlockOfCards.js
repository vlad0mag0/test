import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import Card from './Card';


class BlockOfCards extends Component{


render(){
  return(

      <View style={styles.blockOfCards}>
        {this.props.cards}
      </View>

  )
}
}

const styles = StyleSheet.create({
  blockOfCards:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom:-3
  },
})

export default BlockOfCards
