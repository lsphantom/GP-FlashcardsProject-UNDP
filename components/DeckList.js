import React from 'react'
import {View, Text, Stylesheet, TouchableOpacity} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {styles} from '../styles'
import DeckView from './DeckView'


function DeckItems({navigation}) {
  return (
    <View style={styles.deckbox}>
      <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
        <Text style={styles.decktitle}>
        DECK TITLE
        </Text>
        <Text style={styles.cardcount}>0 Cards</Text>
      </TouchableOpacity>
    </View>
  )
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

  


export default DeckList;