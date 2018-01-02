import React from 'react';
import { Text, View, StyleSheet, StatusBar, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { purple, orange, white } from './utils/colors';
import { Constants } from 'expo';


function UdaciCardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }} >
      <StatusBar translucent backgroundColor={backgroundColor}  {...props} />
    </View>
  )
}



function Decks() {
  return(
    <View style={styles.container}>
      <Text>DECKS SCREEN</Text>
    </View>
  )
}
  


function newDeck() {
  return(
  <View style={styles.container}>
    <Text>NEW DECK SCREEN</Text>
  </View>
 )
} 


const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="library-books" size={30} color='black' />
    }
  },
  NewDeck: {
    screen: newDeck,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="library-add" size={30} color='black' />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
