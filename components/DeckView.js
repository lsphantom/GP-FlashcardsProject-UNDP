import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles'


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
        onPress={() => this.props.navigation.navigate(
          'Quiz'
        )}>
      <Text style={{color:'#fff', fontSize: 16}}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}
}


export default DeckView;