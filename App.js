import React from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export default class App extends React.Component {

  tabs = [
    {
      key: 'games',
      icon: 'gamepad-variant',
      barColor: '#33B5E5',
      label: 'Games',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#33B5E5',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#33B5E5',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]
  state = {
    activeTab: this.tabs[0].key
  }

  renderIcon = (icon, color) => ({ isActive}) => (
      <Icon size={24} color={color} name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive = {isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon, 'red')}
    />
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* Your screen contents depending on current tab. */}
        </View>
        <BottomNavigation
          onTabPress={(newTab, oldTab) => {
            this.setState({
              activeTab: newTab.key,
             })
            this.renderIcon(newTab.icon, 'blue') 
            this.renderIcon(oldTab.icon, 'white')
          }
          }
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    )
  }
}
