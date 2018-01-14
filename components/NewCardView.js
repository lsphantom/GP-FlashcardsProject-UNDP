import React from 'react'
import {View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styles'
import {connect} from 'react-redux'
import {addNewCard, receiveDecks} from '../actions'
import {addCardToDeck} from '../utils/api'


class NewCardView extends React.Component {
state = {
	question: '',
  answer: ''
}

submitNewCard = (title) => {
  let itemKey = title.replace(/\s/g, '');
  const {question, answer} = this.state;

  
  if (question && answer !== '') {
    //Redux
    this.props.newCard(this.state, itemKey);
    
    //AS
    addCardToDeck(this.state, itemKey);

    //Reset
    this.setState({
      question: '',
      answer: ''
    })

    this.props.navigation.goBack()

  }
}



render(){

  const {decktitle} = this.props.navigation.state.params;

	return(
	<KeyboardAvoidingView behavior="padding" style={styles.container}>
    <Text style={styles.newcardtext}>Add Card</Text>
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
    </KeyboardAvoidingView>
	)
}
}

function mapStateToProps(udaciCards){
  return {udaciCards}
}
function mapDispatchToProps(dispatch){
  return {
    dispatch,
    newCard: (card, title) => dispatch(addNewCard(card, title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCardView);