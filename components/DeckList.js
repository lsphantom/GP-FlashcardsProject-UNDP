import React from 'react'
import {View, TouchableOpacity, Text, FlatList} from 'react-native'
import {styles} from '../styles'
import {connect} from 'react-redux'
import {getDecks, clearAll} from '../utils/api'
import {receiveDecks} from '../actions'

class DeckList extends React.Component {

state = {}

componentWillReceiveProps(){
  getDecks()
    .then(decks => {
      this.props.dispatch(receiveDecks(decks));
      this.setState(this.props.udaciCards);
    })
    .catch(err => console.log(err))
}

componentDidMount(){
  getDecks()
    .then(decks => {
      this.props.dispatch(receiveDecks(decks));
      this.setState(this.props.udaciCards);
    })
    .catch(err => console.log(err))
}

  render() {

  const decks = this.state;

  return (
    <View style={{flex:1}}>
    { decks && Object.keys(decks).length !== 0
    ? <FlatList
        data={[...Object.keys(decks)]}
        renderItem={(deck) =>
        <View style={styles.deckbox}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate(
            'Deck',
            { decktitle: decks[deck.item].title,
              cards: decks[deck.item].questions.length }
            )}>
          <Text style={styles.decktitle}>{decks[deck.item].title}</Text>
          <Text style={styles.cardcount}>{decks[deck.item].questions.length} 
          {decks[deck.item].questions.length === 1 ? ' Card' : ' Cards'}
          </Text>
        </TouchableOpacity>
      </View>
        }
        keyExtractor={(deck, index) => deck}
      />
    : <Text style={styles.nodecktext}>No decks available</Text>
    }
    </View>
  )
  }
}


function mapStateToProps(udaciCards){
	return {udaciCards}
}
function mapDispatchToProps(dispatch){
	return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);