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
	const {totalCards, currentScore, currentQuestion, currentAnswer, changeCard} = this.props;	

	return(
	<View style={styles.container}>
		<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
		<Text>Score: {currentScore} / {totalCards}</Text>
		<Text style={styles.newdecktext}>
			{showAnswer
				? currentAnswer
				: currentQuestion}
		</Text>
		<TouchableOpacity onPress={() => this.flipCard()}>
			<Text style={styles.fliptext}>
			{showAnswer
				? 'Question'
				: 'Answer'}
			</Text>
		</TouchableOpacity>
		</View>

		
	</View>
	)
}
}

export default CardView;