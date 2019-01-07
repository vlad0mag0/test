import React,{Component} from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';

const Icons = (props) => {

return(
  <TouchableOpacity>
    <Icon name={props.name} size={props.size} color={props.color} style={styles.iconStyle}/>
  </TouchableOpacity>
)
}

const styles = StyleSheet.create({
  iconStyle:{
    shadowColor: '#000',
    shadowOffset:{width:5, height:2},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2
  }
})
export {Icons}
