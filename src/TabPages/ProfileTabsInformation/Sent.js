import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import Card from './components/Card'
import {Button} from './../../components/Button'
import BlockOfCards from './components/BlockOfCards'
import * as firebase from 'firebase';


class Sent extends Component{
  state={
    cards: [],
    sent: this.props.sent,
    mustdownload: this.props.sent ,
    sentCards:[],
    loaded : 0,
    cardsInRow: 3,
    buttonAdd: <View></View>
  }


componentDidMount(){
  this.addCard()
}


  addCard =  () => {
    let mustdownload = this.state.mustdownload
    const sentCards = []
    uid =  this.props.uid
    let count = 1
    let card  = 1
    new Promise(
      function (resolve, reject) {

        for (card; card < mustdownload+1; card++){
          firebase.database().ref('Users/' + uid + '/postcards/Sent/'+ card).once('value', (snapshot) => {
                image= (snapshot.val().url)
                console.log(card)
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
      const cards=[] //all cards

      for (row; row < height+1; row++){
        for (card = 1; card < cardsInRow+1; card++){
          image = sentCards[loaded]
          loadCardsInRow.push(<Card url={image} />)
          loaded+=1
        }
        cards.push(
          <BlockOfCards cards = {loadCardsInRow} />
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
        <BlockOfCards cards = {loadCardsInRow} />
      )

      loadCardsInRow=0

      if (loaded == this.state.sent){
        this.setState({
          buttonAdd: <View></View>
        })
      }
      else{
        this.setState({
          buttonAdd: <Button onPress={() => {this.addCard()}}><Text>Add card</Text></Button>
        })
      }

      this.setState({
        cards: cards,
        loaded: loaded,
      })
  })
}


  render(){
    return(
        <View style={styles.mainBlock}>
          {this.state.cards}
          {this.state.buttonAdd}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  receivedTab:{
    marginRight:5,
    marginLeft: 5,
  },
  mainBlock:{
    marginBottom: 20,
    marginRight: 40
  }
})

export default Sent
