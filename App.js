import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import BottomNavigation, {
  IconTab
} from 'react-native-material-bottom-navigation';
import CustomSet from '@expo/vector-icons/CustomSet.js'

export default class App extends React.Component {

  tabs = [
    {
      key: 'games',
      icon: 'letter-with-stamp',
      barColor: '#fafafa',
      pressColor: '#e7e7e7'
    }
  ]


  renderIcon = (icon, color) => ({isActive}) => {
       if (isActive) {
           color = '#528bcc'
       }
       return <CustomSet size={24} color={color} name={icon}/>
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
        <View style = {{ flex: 1 }}></View>
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
