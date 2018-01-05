import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles'



class DeckView extends React.Component {
render(){
  return(
    <View style={styles.container}>
      <Text style={styles.decktitle}>DECK 1 TITLE</Text>
      <Text style={styles.cardcount}>0 Cards</Text>
      <TouchableOpacity style={styles.addcardbutton}>
      <Text style={{color:'#02b3e4', fontSize: 16}}>Add Card</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.startquizbutton}>
      <Text style={{color:'#fff', fontSize: 16}}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  )
}
}


export default DeckView;