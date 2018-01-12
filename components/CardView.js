import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles'

class CardView extends Component {

state = {
	showAnswer: false,
}

flipCard = () => {
	//Toggle card state
	this.setState({
		showAnswer: !this.state.showAnswer
	})
}


render(){

	const {showAnswer} = this.state;

	return(
	<View style={styles.container}>
		<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
		<Text>Score: 0/0</Text>
		<Text style={styles.newdecktext}>Current Question?</Text>
		<TouchableOpacity onPress={() => this.flipCard()}>
			<Text style={styles.fliptext}>
			{showAnswer
				? 'Question'
				: 'Answer'}
			</Text>
		</TouchableOpacity>
		</View>

		<View style={{flex:1, justifyContent: 'flex-end'}}>
		<TouchableOpacity style={styles.correctbutton}>
			<Text style={{color: '#fff', fontSize: 16}}>Correct</Text>
		</TouchableOpacity>

		<TouchableOpacity style={styles.incorrectbutton}>
			<Text style={{color: '#fff', fontSize: 16}}>Incorrect</Text>
		</TouchableOpacity>
		</View>
	</View>
	)
}
}

export default CardView;