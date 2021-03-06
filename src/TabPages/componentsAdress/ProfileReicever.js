import React, {Component} from 'react';
import {Font} from 'expo'
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import CustomSet from './../../CustomSet.js'
import About from './../ProfileTabsInformation/About'
import Sent from './../ProfileTabsInformation/Sent'
import Received from './../ProfileTabsInformation/Received'
import Adress from './../ProfileTabsInformation/Adress'


class ProfileReicever extends Component {

state = {
      ui: 'TmVvm3mUyabp2lrQEaHMNQc6qKX2',
      selectedTab: 0,
      fontLoaded: false,
      tabsOfProfile: <Adress cardId = {this.props.cardId}  adress={this.props.adress} />,
    }

async componentDidMount() {
    await Font.loadAsync({
      'roboto-font-boldItalic':require('./../../../assets/Roboto/Roboto-BoldItalic.ttf'),
      'roboto-font-bold': require('./../../../assets/Roboto/Roboto-Bold.ttf'),
      'roboto-font-medium': require('./../../../assets/Roboto/Roboto-Medium.ttf'),
      'roboto-font-regular': require('./../../../assets/Roboto/Roboto-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  setTab = selectedTab => {
   this.setState({ selectedTab });

    if (selectedTab === 1){
      this.setState({
        tabsOfProfile: <About text={this.props.aboutText}/>
      })
    }

    if (selectedTab === 2){
      this.setState({
        tabsOfProfile: <Sent sent={this.props.sent} uid={this.props.uid}/>
      })
    }

    if (selectedTab === 3){
      this.setState({
        tabsOfProfile: <Received received = {this.props.received}/>
      })
    }

    if (selectedTab === 0){
      this.setState({
        tabsOfProfile: <Adress cardId={this.props.cardId} adress={this.props.adress}/>
      })
    }

 };

  render(){

    if (this.state.fontLoaded){
      return(
        <View>
          <View style={styles.upBar}>
            <TouchableOpacity style={styles.crossIcon}>
              <CustomSet size= {18} color='#FFC4D1' name= 'cancel'/>
            </TouchableOpacity>
          </ View>
          <View style={styles.headerOfProfile}>
              <View style={styles.postcardsText}>
                  <Text style={styles.profileNumbers}>{this.props.sent}</Text>
                  <Text style={{color:'#FD7992'}}>sent</Text>
              </View>
              <View style={styles.containerImage}>
                <Image
                style={styles.profileImage}
                source = {require('./../../img/profile.jpg')}
                />
                <View style = {styles.underPhotoText}>
                  <Text
                  style={{color: '#1d346c',
                  fontFamily:'roboto-font-bold',
                  fontSize: 18}}
                  >
                  {this.props.name}
                  </Text>
                  <Text
                  style={{
                    color: '#d8dcfc',
                    marginTop: 2,
                    fontFamily: 'roboto-font-medium',
                    fontSize: 13,
                    textAlign: 'center'
                }}
                  >
                  Hello
                  </Text>
                </View>
              </View>
              <View style={styles.postcardsText}>
                <Text style={styles.profileNumbers}>{this.props.received}</Text>
                <Text style={{color:'#FD7992'}}>received</Text>
              </View>
          </View>
          <View>
              <MaterialTabs
                items={['adress','about', 'sent', 'received']}
                selectedIndex={this.state.selectedTab}
                onChange={this.setTab}
                barColor="white"
                indicatorColor="#d1d5fa"
                activeTextColor="#4d58ee"
                uppercase= {false}
                textStyle={{
                  fontFamily: 'roboto-font-medium',
                  fontSize: 16
              }}
              />
          </View>
          <ScrollView style={styles.informationStyle}>
            {this.state.tabsOfProfile}
          </ScrollView>
      </View>
      )
    }
    else{return(<Text></Text>)}
  }
}

const styles = StyleSheet.create({
  containerOfHeaderText:{
    marginTop: 25,
    width: "100%",
    height: 20,
    alignItems: 'center',
  },
  crossIcon:{
    marginRight: 15
  },
  upBar:{
    marginTop: 30,
    width: '100%',
    flexDirection: 'row-reverse'
  },
  headerText:{
    color: '#4d58ee',
    fontFamily:'roboto-font-bold',
    fontSize: 18
  },
  underPhotoText: {
    marginTop: 18
  },
  containerImage: {
    marginTop: 23,
    marginBottom: 12,
    alignItems: 'center',
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 1000
  },
  profileNumbers:{
    color:'#FD7992',
    fontFamily:'roboto-font-bold',
    fontSize: 19
  },
  headerOfProfile: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  postcardsText:{
    width: '30%',
    marginTop: '20%',
    alignItems: 'center'
  },
  informationStyle:{
    width: '100%',
    height: '52%',
    zIndex: 0
  }
})


export default ProfileReicever
