import React from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import {styles} from '../styles'
import {connect} from 'react-redux'
import {clearLocalNotification, setLocalNotification} from '../utils/helpers'

class DeckView extends React.Component {

static navigationOptions = ({navigation}) => {
  const {decktitle} = navigation.state.params;
  return {
    title: decktitle
  }
}


goToQuiz = (cards) => {
  const {decktitle, questions} = this.props.navigation.state.params;

  if(cards > 0) {
    this.props.navigation.navigate('Quiz', {decktitle, cards, questions})
    //Set local notification
    clearLocalNotification()
      .then(setLocalNotification)
  } else {
    Alert.alert(
  'No Cards in Deck',
  'Please add cards to this deck to start a quiz',
  [{text: 'OK'}],
  { cancelable: false })
  }
}


render(){

  const {decktitle, cards} = this.props.navigation.state.params;

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


const mapStateToProps = udaciCards => ({ udaciCards });

export default connect(mapStateToProps)(DeckView);