import { RECEIVE_DECKS, ADD_NEW_DECK, ADD_NEW_CARD } from '../actions'


const initialDecksState = {
  React: {
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
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}


function udaciCards(state = initialDecksState, action) {
  const {decks, newDeck, title, newCard} = action;

  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...decks
      }

    case ADD_NEW_DECK:
      return {
        ...state,
        ...newDeck
      }

    case ADD_NEW_CARD:
      return {
        ...state,
        [title]: {
          title,
          questions: [
            ...state[title].questions,
            newCard
          ]
        }
      }

    default:
      return state;
  }
}

export default udaciCards;