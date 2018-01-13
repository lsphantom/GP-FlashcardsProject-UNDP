import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {styles} from '../styles'
import CardView from './CardView'
import {connect} from 'react-redux'


class QuizView extends Component {

state = {
	index: 0,
	score: 0,
	completed: false,
}


changeCard = (changeValue) => {
	const {cards} = this.props.navigation.state.params;
	let {index, score, completed} = this.state;
	
	// index and scoring
	if(changeValue === 'correct'){
		score++;
		index++;
		completed = (index === cards);
		this.setState({index, score, completed});
	} else {
		score = score;
		index++;
		completed = (index === cards);
		this.setState({index, score, completed});
	}
}

render(){
	const {index, score, completed} = this.state;
	const {cards, questions} = this.props.navigation.state.params;

	return(
	<View style={styles.container}>
	{ completed 
		? <View style={styles.container}>
			<Text>Score: {(score / cards) * 100}%</Text>
		  </View>
		: <View style={styles.container}>
			<CardView currentCard={index}
					totalCards={cards}
					currentScore={score}
					currentQuestion={questions[index].question}
					currentAnswer={questions[index].answer}
					changeCard={() => this.changeCard()} />
			<View style={{flex:1, justifyContent: 'flex-end'}}>
			<TouchableOpacity style={styles.correctbutton}
				onPress={() => this.changeCard('correct')}>
				<Text style={{color: '#fff', fontSize: 16}}>Correct</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.incorrectbutton}
				onPress={() => this.changeCard('incorrect')}>
				<Text style={{color: '#fff', fontSize: 16}}>Incorrect</Text>
			</TouchableOpacity>
			</View>
		</View>
	}
		
	</View>
	)
}
}

function mapStateToProps(udaciCards){
  return { udaciCards }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizView);