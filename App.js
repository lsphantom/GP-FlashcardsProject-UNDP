import React from 'react';
import { Text, View, StyleSheet, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { purple, white } from './utils/colors';
import { styles } from './styles';
import { Constants } from 'expo';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import NewDeckView from './components/NewDeckView';

const store = createStore(reducer);


function UdaciCardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }} >
      <StatusBar translucent backgroundColor={backgroundColor}  {...props} />
    </View>
  )
}


const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="library-books" size={28} color='black' />
    }
  },
  NewDeck: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarIcon: () => <MaterialIcons name="library-add" size={28} color='black' />
    }
  }
});



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={{flex:1}}>
        <UdaciCardsStatusBar backgroundColor={'#02b3e4'} barStyle="light-content" />
        <Tabs />
      </View>
      </Provider>
    );
  }
}