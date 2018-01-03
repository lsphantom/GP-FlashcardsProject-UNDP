import React from 'react';
import { Text, View, StyleSheet, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../App';
import { purple, orange, white } from '../utils/colors';
import { Constants } from 'expo';


function DeckList ({navigation}){
  return(
    <View>
      <View style={styles.deckbox}>
        <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
          <Text style={styles.decktitle}>
            DECK 1 NAME
          </Text>
        </TouchableOpacity>
        <Text style={styles.cardcount}>3 cards</Text>
      </View>

      <View style={styles.deckbox}>
        <Text style={styles.decktitle}>DECK NAME</Text>
        <Text style={styles.cardcount}>4 cards</Text>
      </View>

    </View>
  )
}


function Deck () {
  return(
    <View style={styles.container}>
      <Text style={styles.decktitle}>DECK 1 NAME</Text>
    </View>
  )
}


const Stack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Decks'
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck Title'
    },
  }
})



class DeckView extends React.Component {
  render() {
    return(
        <Stack />
    )
  }
}

export default DeckView;
