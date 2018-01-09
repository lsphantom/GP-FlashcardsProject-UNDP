export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_NEW_DECK = 'ADD_NEW_DECK';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';


export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function addNewDeck(newDeck) {
  return {
    type: ADD_NEW_DECK,
    newDeck
  };
}

export function addNewCard(title, newCard) {
  return {
    type: ADD_NEW_CARD,
    newCard,
    title
  };
}