import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styles'



class NewDeckView extends React.Component {
state = {
	deckName: 'Deck Title'
}


render(){
	return(
	<View style={styles.container}>
      <Text style={styles.newdecktext}>What is the title of your new deck?</Text>
      <TextInput
        style={{width: 200, height: 50, borderColor: 'gray', borderWidth: 2, borderRadius: 8, marginTop: 10, padding: 10}}
        onChangeText={(text) => this.setState({deckName: text})}
        value={this.state.deckName}
      />
      <TouchableOpacity style={styles.basicbutton}>
      	<Text style={{color: '#fff', fontSize: 16}}>Submit</Text>
      </TouchableOpacity>
    </View>
	)
}
}
    


export default NewDeckView;