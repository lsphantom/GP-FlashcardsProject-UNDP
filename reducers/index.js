import { RECEIVE_DECKS, ADD_NEW_DECK, ADD_NEW_CARD } from '../actions'


function udaciCards(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };

    case ADD_NEW_DECK:
      return {
        ...state,
        ...action.deck
      }

    //Fix add card reducer switch
    case ADD_NEW_CARD:
      return {
        ...state,
        ...action.card
      }

    default:
      return state;
  }
}

export default udaciCards;