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

render(){
	const {index} = this.state;

	return(
	<View style={styles.container}>
		<CardView currentCard={index} />
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