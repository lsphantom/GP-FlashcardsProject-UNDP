import React from 'react'
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import {styles} from '../styles'
import {connect} from 'react-redux'
import {addNewDeck} from '../actions'
import {saveDeckTitle, clearAll} from '../utils/api'

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
    //Update Redux
    this.props.addNewDeck(deckObject);

    //Update AS
    saveDeckTitle(title);

    this.setState({deckName: ''});
    this.props.navigation.navigate('Deck',
      {decktitle: title, cards: 0, questions: []}
    );
  }
}

resetData = () => {
  clearAll();
}

render(){
  const {deckName} = this.state;
	return(
	<KeyboardAvoidingView behavior='padding' style={styles.container}>
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
      {/*<TouchableOpacity style={styles.dangerbutton}
        onPress={() => this.resetData()}>
        <Text style={{color: '#fff', fontSize: 16}}>RESET ASYNC</Text>
      </TouchableOpacity>*/}
    </KeyboardAvoidingView>
	)
}
}



function mapStateToProps(udaciCards){
  return {udaciCards}
}


export default connect(mapStateToProps, {addNewDeck})(NewDeckView);
