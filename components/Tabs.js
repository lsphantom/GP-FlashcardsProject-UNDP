import React, {Component} from 'react'
import { TabNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import DeckList from './DeckList'
import NewDeckView from './NewDeckView'


export default Tabs = TabNavigator({
  AllDecks: {
    screen: DeckList,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="library-books" size={28} color='black' />
    }
  },
  NewDeck: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="library-add" size={28} color='black' />
    } 
  }
});