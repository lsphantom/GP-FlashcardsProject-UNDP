import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'UdaciCards:decks'

const starterDecks = {
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

export function clearAll() {
	return AsyncStorage.clear(DECKS_STORAGE_KEY)
}

export function getDecks() {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then((results) => {
			if (results === null) {
				AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(starterDecks))
				return AsyncStorage.getItem(DECKS_STORAGE_KEY)
					.then(data => JSON.parse(data))
			} else {
				return JSON.parse(results)
			}
		})
}

export function getDeck(id) {
	const itemKey = id.replace(/\s/g, '');
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then((result) => {
			const data = JSON.parse(result[itemKey]);
		})
}

export function saveDeckTitle(title) {
	const itemKey = title.replace(/\s/g, '');

	return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
		[itemKey]: {
			title,
			questions: []
		}
	}))
}

export function addCardToDeck(card, title) {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then((result) => {
    	const data = JSON.parse(result);
    	data[title].questions.push(card);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  })
}