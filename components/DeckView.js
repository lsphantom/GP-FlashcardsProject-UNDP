import React from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import {styles} from '../styles'
import {receiveDecks} from '../actions'

class DeckView extends React.Component {

static navigationOptions = ({navigation}) => {
  const {decktitle} = navigation.state.params;
  return {
    title: decktitle
  }
}

state = {
  decktitle: '',
  cards: ''
}

componentDidMount(){
  const {decktitle, cards} = this.props.navigation.state.params;
  this.setState({
    decktitle,
    cards
  })
}

componentWillReceiveProps(nextProps) {
  const {decktitle, cards} = nextProps.navigation.state.params;
  this.setState({
    decktitle,
    cards
  })
}


goToQuiz = (cards) => {
  const {decktitle} = this.state;
  const {questions} = this.props.navigation.state.params;

  if(cards > 0) {
    this.props.navigation.navigate('Quiz', {decktitle, cards, questions})
  } else {
    Alert.alert(
  'No Cards in Deck',
  'Please add cards to this deck to start a quiz',
  [{text: 'OK'}],
  { cancelable: false })
  }
}


render(){

  const {decktitle, cards} = this.state;

  return(
    <View style={styles.container}>
      <Text style={styles.decktitle}>{decktitle}</Text>
      <Text style={styles.cardcount}>{cards}
      {cards === 1 ? ' Card' : ' Cards'}
      </Text>
      <TouchableOpacity style={styles.addcardbutton}
        onPress={() => this.props.navigation.navigate(
          'AddCard',
          {decktitle}
        )}>
      <Text style={{color:'#02b3e4', fontSize: 16}}>Add Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.startquizbutton}
        onPress={() => this.goToQuiz(cards)}>
      <Text style={{color:'#fff', fontSize: 16}}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}
}



export default DeckView;