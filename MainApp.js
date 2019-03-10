import React from 'react';
import { StyleSheet, View} from 'react-native';
import BottomNavigation, {
  IconTab
} from 'react-native-material-bottom-navigation';
import CustomSet from './src/CustomSet.js'
import * as firebase from 'firebase';
import RequestAdress from './src/TabPages/RequestAdress'
import ProfileTab from './src/TabPages/ProfileTab'
import Messages from './src/TabPages/Messages'
import Icon from '@expo/vector-icons/'


export default class MainApp extends React.Component {

  state={
    name: '',
    surname : '',
    about: '',
    adress: '',
    sent: 0,
    received: 0,
    uid: this.props.uid
  }

  componentWillMount(){
  firebase.initializeApp({
    apiKey: "AIzaSyAxpbP_j5KmxabSjlYXlSPQ3JPg_gCX9XA",
    authDomain: "postcrossing-app.firebaseapp.com",
    databaseURL: "https://postcrossing-app.firebaseio.com",
    projectId: "postcrossing-app",
    storageBucket: "postcrossing-app.appspot.com",
    messagingSenderId: "25868299726"
  });
  firebase.database().ref('Users/'+ this.state.uid).once('value', (snapshot) => {
    const name = (snapshot.val().name)
    const surname = (snapshot.val().surname)
    const about = (snapshot.val().about)
    const adress= (snapshot.val().adress)
    const sent = (snapshot.val().sent)
    const received = (snapshot.val().received)
    this.setState({
      sent:sent ,
      received: received,
      adress: adress,
      name: name,
      aboutText:about,
      mainView: <ProfileTab sent={sent} received={received} adress={adress} name={name + ' ' + surname} aboutText={about}
      headerText='Me' uid={this.props.uid}/>
    })
  })

}

updateMainView(value){
  this.setState({
    mainView: value
  })
}



  renderIcon = (icon, size, color) => ({isActive}) => {
       if (isActive) {
           color = '#f8dee4'
       }
       return <CustomSet size={size} color={color} name={icon}/>
   }

  renderTab = ({ tab, isActive }) => (
    <IconTab
      isActive = {isActive}
      key={tab.key}
      renderIcon={this.renderIcon(tab.icon, tab.size, '#9d83a5')}
    />
  )

  render(

    tabs = [
      {
        key: 'profile',
        icon: 'user-circle-o',
        barColor: '#182e68',
        pressColor: '#e7e7e7',
        size: 32,
        window: <ProfileTab sent={this.state.sent} received={this.state.received} adress={this.state.adress} name={this.state.name + ' ' + this.state.surname} aboutText={this.state.aboutText}
        headerText='Me' uid={this.props.uid}/>
      },
      {
        key: 'postcard',
        icon: 'postcard-rectangular-rounded-outline',
        barColor: '#182e68',
        pressColor: '#e7e7e7',
        custom: 'yes',
        size: 32,
        window: <RequestAdress sent={this.state.sent} received={this.state.received} uid={this.state.uid}/>
      },
      {
        key: 'messages',
        icon: 'speech-bubble-1',
        barColor: '#182e68',
        pressColor: '#e7e7e7',
        custom: 'yes',
        size: 24,
        window: <Messages/>
      }
    ]

  ) {
    return (
      <View style={{ flex: 1 }}>
        <View style = {styles.mainWindowStyles}>
          {this.state.mainView}
        </View>
        <View style ={styles.BottomNavigationStyles}>
          <BottomNavigation
            onTabPress={(newTab, oldTab) => {
              this.setState({
                activeTab: newTab.key,
                mainView: newTab.window
               })
               console.log(this.state.about)
            }
            }
            renderTab={this.renderTab}
            tabs={tabs}
          />
        </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  mainWindowStyles:{
    flex:1
  },
  BottomNavigationStyles:{
    shadowOffset:{  width: -10,  height: -10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    zIndex: 2
  },
  ImageStyle:{
    borderWidth: 1,
    borderColor: 'black'
  }
})
