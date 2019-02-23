import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import Card from './components/Card'
import {Button} from './../../components/Button'
import * as firebase from 'firebase';


class Sent extends Component{
  state={
    cards: [
  ],
    mustdownload: this.props.sent,
    sentCards:[],
    loaded : 0,
    cardsInRow: 3
  }




addCard =  () => {
  let mustdownload = this.state.mustdownload
  const sentCards = []
  let count = 1
  let card  = 1
  new Promise(
    function (resolve, reject) {

      for (card; card < mustdownload+1; card++){
        firebase.database().ref('Users/TmVvm3mUyabp2lrQEaHMNQc6qKX2/postcards/Sent/'+ card).once('value', (snapshot) => {
              image= (snapshot.val().url)
              sentCards.push(image)
              if ( count == mustdownload){
                resolve()
              }
          }).then( () => {count= count+1})

        }
    }).then((fulfilled) => {

    let cardsInRow = this.state.cardsInRow //how much cards in row
    let card = 1
    let height = Math.floor(mustdownload/cardsInRow)
    let restOfCards = mustdownload - (cardsInRow*height) //full cardsInRows of cards
    let row = 1
    let loaded= this.state.loaded //how much cards were loaded
    let loadCardsInRow= [] // cards in row
    let cards=[] //all cards

    for (row; row < height+1; row++){
      for (card = 1; card < cardsInRow+1; card++){
        image = sentCards[loaded]
        loadCardsInRow.push(<Card url={image}/>)
        loaded+=1
      }
      cards.push(
        <View style={styles.blockOfCards}> {loadCardsInRow} </View>
      )
    }

      loadCardsInRow=[]

      card=1

    for (card; card < restOfCards + 1; card++ ){
      image= sentCards[loaded]
      loadCardsInRow.push(<Card url={image}/>)
      loaded+=1
    }

    cards.push(
      <View style={styles.blockOfCards}> {loadCardsInRow}</View>
    )

    loadCardsInRow=0

    this.setState({
      cards: cards
    })

  })
}


  render(){
    return(
        <View style={styles.mainBlock}>
          {this.state.cards}
          <Button onPress={() => {this.addCard()}}><Text>Add card</Text></Button>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  receivedTab:{
    marginRight:5,
    marginLeft: 5,
  },
  blockOfCards:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginBottom:-3
  },
  mainBlock:{
    marginBottom: 20
  }
})

export default Sent
