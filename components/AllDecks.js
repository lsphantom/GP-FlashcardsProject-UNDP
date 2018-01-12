import React from 'react'
import {View, Text, Stylesheet, TouchableOpacity, FlatList} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {styles} from '../styles'
import {connect} from 'react-redux'
import DeckView from './DeckView'
import DeckList from './DeckList'
import NewCardView from './NewCardView'
import QuizView from './QuizView'


const DeckStack = StackNavigator({
  List: {
    screen: DeckList,
    navigationOptions: {
      title: 'Decks',
      headerTintColor: '#02b3e4'
    },
  },
  Deck: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: '#02b3e4'
    },
  },
  AddCard: {
    screen: NewCardView,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: '#02b3e4'
    }
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: '#02b3e4'
    }
  }
})



class AllDecks extends React.Component {

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


export default connect(mapStateToProps, mapDispatchToProps)(AllDecks);