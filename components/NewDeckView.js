import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styles'
import {connect} from 'react-redux'
import {addNewDeck} from '../actions'


class NewDeckView extends React.Component {
state = {
	deckName: ''
}


submitNewDeck = (title) => {
  const {deckName} = this.state;
  const deck = title.replace(/\s/g, '');
  const deckObject = {
    [deck]: {
      title,
      questions: []
    }
  }
  if (deckName !== '') {
    this.props.dispatch(addNewDeck(deckObject));
    this.setState({deckName: ''});
    this.props.navigation.navigate('AllDecks');
  }
}


render(){
  const {deckName} = this.state;
	return(
	<View style={styles.container}>
      <Text style={styles.newdecktext}>What is the title of your new deck?</Text>
      <TextInput
        style={{width: 200, height: 50, borderColor: 'gray', borderWidth: 2, borderRadius: 8, marginTop: 10, padding: 10}}
        onChangeText={(text) => this.setState({deckName: text})}
        value={this.state.deckName}
      />
      <TouchableOpacity style={styles.basicbutton}
        onPress={() => this.submitNewDeck(deckName)}>
      	<Text style={{color: '#fff', fontSize: 16}}>Submit</Text>
      </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckView);