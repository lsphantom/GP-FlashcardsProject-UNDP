import React from 'react'
import {StackNavigator} from 'react-navigation'
import DeckView from './DeckView'
import DeckList from './DeckList'
import NewCardView from './NewCardView'
import QuizView from './QuizView'
import Tabs from './Tabs'


export default DeckStack = StackNavigator({
  List: {
    screen: Tabs,
    navigationOptions: {
      title: 'Decks',
      headerTintColor: '#222',
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  },
  Deck: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: '#222',
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  },
  AddCard: {
    screen: NewCardView,
    navigationOptions: {
      headerTintColor: '#222',
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: '#222',
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  }
})