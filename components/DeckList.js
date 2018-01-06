import React from 'react'
import {View, Text, Stylesheet, TouchableOpacity, FlatList} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {styles} from '../styles'
import {connect} from 'react-redux'
import DeckView from './DeckView'

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


class DeckItems extends React.Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
  return (
    <View style={styles.deckbox}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck')}>
        <Text style={styles.decktitle}>SAMPLE DECK TITLE</Text>
        <Text style={styles.cardcount}>0 Cards</Text>
      </TouchableOpacity>
      <Text>ADD FLATLIST HERE</Text>
    </View>
  )
  }
}

const DeckStack = StackNavigator({
  List: {
    screen: DeckItems,
    navigationOptions: {
      title: 'Decks',
      headerTintColor: '#02b3e4'
    },
  },
  Deck: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck Title',
      headerTintColor: '#02b3e4'
    },
  }
})



class DeckList extends React.Component {
  render() {
    return(
    <View style={{flex:1}}>
        <DeckStack />
    </View>
    )
  }
}


function mapStateToProps(udaciCards){
  return { udaciCards }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeckList);