import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert,TouchableOpacity} from 'react-native';
import {Button} from './../components/Button';
import ProfileReicever from './componentsAdress/ProfileReicever'
import CustomSet from './../CustomSet.js'
import RegisterPostcard from './RegisterPostcard'
import * as firebase from 'firebase';


class RequestAdress extends Component {

state={
  mainView:

  <View style= {styles.tabStyles}>
  <View style={styles.containerOfHeaderText}>
      <Text style={styles.headerText}>Hello</Text>
  </View>
  <View style={styles.mainViewStyles}>
    <Button onPress = {this.onPressRequestButton.bind(this)}><Text>Request Adress</Text></Button>
    <Button onPress = {this.onPressRegisterCard.bind(this)}><Text>Register a postcard</Text></Button>
  </View>
  <View style={styles.fewNotes}></View>
  </View>,
  sent: this.props.sent,
  received: this.props.receive,
  id: 'US'
}


componentDidMount(){
  firebase.database().ref('Users/'+ this.props.uid).once('value', (snapshot) => {
        travellingCards= (snapshot.val().travellingCards)
}).then( () => {
  this.setState({
    travellingCards: travellingCards
  })
  firebase.database().ref('Users/' + this.props.uid).update({
    travellingCards: this.state.travellingCards + 1
    })
  firebase.database().ref('Users/' + this.props.uid + '/postcards/Sent/' + (this.state.travellingCards + 1)).update({
    url: 'https://firebasestorage.googleapis.com/v0/b/postcrossing-app.appspot.com/o/postcard.png?alt=media&token=9f42f739-8951-4bcf-81c3-a81576041f4f'
  })

})

}

onPressRequestButton(){
  cardId = ''
  firebase.database().ref('listOfUsers/countUsers').once('value', (snapshot) => {
        users= (snapshot.val().countUsers)
      }).then( () => {

        //Select random user

                randomIndex= Math.floor(Math.random() * (users)) + 1
                firebase.database().ref('listOfUsers/' + randomIndex).once('value', (snapshot) => {

                      randomUser= (snapshot.val().user)

                      //make id for card

                      firebase.database().ref('Cards/' + this.state.id).once('value', (snapshot) => {
                          cards = (snapshot.val().cards)
                        }).then( () => {
                          def='0000000'
                         cardId = def.substr(0,((def.length - (String(cards+1).length))-1)) +(parseInt(cards)+1)
                         firebase.database().ref('Cards/' + this.state.id).update({
                           cards: (parseInt(cards)+1)
                         })

                         firebase.database().ref('Users/' + randomUser + '/waitFor').push({
                           card: this.state.id + cardId
                         })
                       })

            }).then( () => {

                firebase.database().ref('Users/' + randomUser).once('value', (snapshot) => {
                      randomAdress= (snapshot.val().adress)
                    })

                    //load reicever's adress

                    firebase.database().ref('Users/' + randomUser).once('value', (snapshot) => {
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
                        mainView: <ProfileReicever sent={sent} received={received} adress={adress} name={name + ' ' + surname} aboutText={about}
                        uid={this.props.uid} cardId={this.state.id + '-' + cardId}/>
                      })
                    })

                  })


})

firebase.database().ref('Users/' + this.props.uid).update({
  sent: this.props.sent + 1

})

firebase.database().ref('Users/' + this.props.uid + '/postcards/sent').update({


})

firebase.database().ref('/cardsInTrevel').once('value', (snapshot) => {
  cards = (snapshot.val().cards)
}).then( () => {
firebase.database().ref('/cardsInTrevel').update({
  cards: cards+1
      })
    }
  )


}


onPressRegisterCard(){
  this.setState({
    mainView: <RegisterPostcard uid={this.props.uid}/>
  })
}


render(){
    return(
      this.state.mainView
    )
  }
}

const styles = StyleSheet.create({
  mainViewStyles:{
    marginTop: 60
  },
  containerOfHeaderText:{
    marginTop: 25,
    marginBottom: 40,
    width: '100%',
    height: 20,
    alignItems:'center'
  },
  headerText:{
    color: '#4d58ee',
    fontFamily:'roboto-font-bold',
    fontSize: 18,
  },
  tabStyles:{
  }
})

export default RequestAdress
