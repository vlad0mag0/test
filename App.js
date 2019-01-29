import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import BottomNavigation, {
  IconTab
} from 'react-native-material-bottom-navigation';
import SendCard from './src/TabPages/SendCard'
import CustomSet from './src/CustomSet.js'
import * as firebase from 'firebase';
import {Button} from './src/components/Button'
import {FontAwesome} from '@expo/vector-icons'

export default class App extends React.Component {

  componentWillMount(){
  firebase.initializeApp({
    apiKey: "AIzaSyAxpbP_j5KmxabSjlYXlSPQ3JPg_gCX9XA",
    authDomain: "postcrossing-app.firebaseapp.com",
    databaseURL: "https://postcrossing-app.firebaseio.com",
    projectId: "postcrossing-app",
    storageBucket: "postcrossing-app.appspot.com",
    messagingSenderId: "25868299726"
  });
}

  state = {
    mainView:
      <SendCard/>,
    nameOfPerson:'DU-DU'
  }

onPressButton(){
  const {nameOfPerson} = this.state
  firebase.database().ref('listOfUsers/countOfUsers').once('value', function (snapshot) {
     const obj = (snapshot.val().countOfUsers)
     console.log(obj)
   });
}

  tabs = [
    {
      key: 'postcard',
      icon: 'postcard-rectangular-rounded-outline',
      barColor: '#fafafa',
      pressColor: '#e7e7e7'
    },
    {
      key: 'profile',
      icon: 'user-circle',
      barColor: '#fafafa',
      pressColor: '#e7e7e7'
    }
  ]


  renderIcon = (icon, color) => ({isActive}) => {
       if (isActive) {
           color = '#528bcc'
       }
       return <CustomSet size={32} color={color} name={icon}/>
   }

  renderTab = ({ tab, isActive }) => (
    <IconTab
      isActive = {isActive}
      key={tab.key}
      renderIcon={this.renderIcon(tab.icon, '#aaaeb3')}
    />
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style = {{ flex: 1 }}>
          <Button onPress={this.onPressButton.bind(this)}><Text>Add a child</Text></Button>
        </View>
        <View style ={styles.BottomNavigationStyles}>
          <BottomNavigation
            onTabPress={(newTab, oldTab) => {
              this.setState({
                activeTab: newTab.key,
               })
            }
            }
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  BottomNavigationStyles:{
    marginTop: 50,
    shadowOffset:{  width: -10,  height: -10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  }
})
