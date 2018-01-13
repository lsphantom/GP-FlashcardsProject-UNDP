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


import AllDecks from './components/AllDecks';
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
  AllDecks: {
    screen: AllDecks,
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


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <View style={{flex:1}}>
        <UdaciCardsStatusBar backgroundColor={'white'} barStyle="dark-content" />
        <Tabs />
      </View>
      </Provider>
    );
  }
}


export default App;