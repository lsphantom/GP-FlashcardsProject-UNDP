import React from 'react';
import { Text, View, StyleSheet, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { purple, white } from './utils/colors';
import { styles } from './styles';
import { Constants } from 'expo';
import { setLocalNotification } from './utils/helpers'
import Tabs from './components/Tabs';
import DeckStack from './components/Stacks';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);


function UdaciCardsStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }} >
      <StatusBar translucent backgroundColor={backgroundColor}  {...props} />
    </View>
  )
}


class App extends React.Component {

componentDidMount(){
  setLocalNotification()
}

  render() {
    return (
      <Provider store={store}>
      <View style={{flex:1}}>
        <UdaciCardsStatusBar backgroundColor={white} barStyle="dark-content" />
        <DeckStack />
      </View>
      </Provider>
    );
  }
}


export default App;