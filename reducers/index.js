import { RECEIVE_DECKS, ADD_NEW_DECK, ADD_NEW_CARD } from '../actions'

const initialDecksState = {
  decks: [
     {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
       {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
  ]
}



function udaciCards(state = initialDecksState, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return state

    case ADD_NEW_DECK:
      return state

    case ADD_NEW_CARD:
      return state

    default:
      return state;
  }
}

export default udaciCards;