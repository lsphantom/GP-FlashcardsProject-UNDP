import React from 'react'
import {View, TouchableOpacity, Text, FlatList} from 'react-native'
import {styles} from '../styles'
import {connect} from 'react-redux'

class DeckList extends React.Component {

state = { decks: [] }


componentDidMount(){
	this.setState({ decks: this.props.udaciCards.decks })
}

  render() {

  

  return (
    
      <FlatList
      	data={this.state.decks}
      	renderItem={({item}) =>
      	<View style={styles.deckbox}>
      	  <TouchableOpacity onPress={() => this.props.navigation.navigate(
      	  	'Deck',
      	  	{ decktitle: item.title,
      	  	  cards: item.questions.length }
      	  	)}>
	        <Text style={styles.decktitle}>{item.title}</Text>
	        <Text style={styles.cardcount}>{item.questions.length} 
	        {item.questions.length === 1 ? ' Card' : ' Cards'}
	        </Text>
	      </TouchableOpacity>
	    </View>
      	}
      	keyExtractor={item => item.title}
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