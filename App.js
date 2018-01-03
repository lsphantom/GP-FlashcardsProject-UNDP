import React from 'react';
import { Text, View, StyleSheet, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { purple, orange, white } from './utils/colors';
import { Constants } from 'expo';
import DeckView from './components/DeckList';


function UdaciCardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }} >
      <StatusBar translucent backgroundColor={backgroundColor}  {...props} />
    </View>
  )
}



function Decks({ navigation }) {
  return(
    <View>
      <View style={styles.deckbox}>
      <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
      <Text style={styles.decktitle}>
        DECK NAME HERE
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



function newDeck() {
  return(
  <View style={styles.container}>
    <Text style={styles.decktitle}>NEW DECK SCREEN</Text>
    <Text style={styles.cardcount}></Text>
  </View>
 )
}


const Tabs = TabNavigator({
  Decks: {
    screen: DeckView,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="library-books" size={28} color='black' />
    }
  },
  NewDeck: {
    screen: newDeck,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="library-add" size={28} color='black' />
    }
  } }, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});



export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <UdaciCardsStatusBar backgroundColor={orange} barStyle="light-content" />
        <Tabs />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckbox: {
    backgroundColor: '#6A6B7C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 2,
  },
  decktitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardcount: {
    color: 'white',
  },

});
