import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styles'
import {connect} from 'react-redux'
import {addNewCard, receiveDecks} from '../actions'


class NewCardView extends React.Component {
state = {
	question: '',
  answer: ''
}

submitNewCard = (title) => {
  const {question, answer} = this.state;
  if (question && answer !== '') {
    this.props.newCard(this.state, title);
    this.props.navigation.goBack();
  }
}

render(){

  const {decktitle} = this.props.navigation.state.params;

	return(
	<View style={styles.container}>
      <Text>Question:</Text>
      <TextInput
        style={{width: 200, height: 50, borderColor: 'gray', borderWidth: 2, borderRadius: 8, marginTop: 10, padding: 10}}
        onChangeText={(text) => this.setState({question: text})}
        value={this.state.question}
      />
      <Text>Answer:</Text>
      <TextInput
        style={{width: 200, height: 50, borderColor: 'gray', borderWidth: 2, borderRadius: 8, marginTop: 10, padding: 10}}
        onChangeText={(text) => this.setState({answer: text})}
        value={this.state.answer}
      />
      <TouchableOpacity style={styles.basicbutton}
        onPress={() => this.submitNewCard(decktitle)}>
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
  return {
    dispatch,
    getDecks: () => dispatch(receiveDecks()),
    newCard: (card, title) => dispatch(addNewCard(card, title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCardView);