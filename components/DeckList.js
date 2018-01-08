import React from 'react'
import {View, TouchableOpacity, Text, FlatList} from 'react-native'
import {styles} from '../styles'
import {connect} from 'react-redux'

class DeckList extends React.Component {

state = {}

componentDidMount(){
	this.setState(this.props.udaciCards)
}

  render() {

  const decks = this.state;

  return (
      <FlatList
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