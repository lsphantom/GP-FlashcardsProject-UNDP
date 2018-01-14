import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckbox: {
    backgroundColor: '#6C7684',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 2,
  },
  decktitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardcount: {
    fontSize: 18,
    color: '#aaa',
    textAlign: 'center'
  },
  basicbutton: {
    borderRadius: 6,
    width: 150,
    height: 50,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#02b3e4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addcardbutton: {
    borderRadius: 6,
    width: 150,
    height: 50,
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#02b3e4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  startquizbutton: {
    borderRadius: 6,
    width: 150,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#02b3e4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dangerbutton: {
    borderRadius: 6,
    width: 150,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nodecktext: {
    textAlign: 'center',
    marginTop: 40
  },
  newdecktext: {
    fontSize: 40,
    color: '#333',
    textAlign: 'center'
  },
  fliptext: {
    color: 'red',
    fontWeight: 'bold'
  },
  correctbutton: {
    borderRadius: 6,
    width: 150,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  incorrectbutton: {
    borderRadius: 6,
    width: 150,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  newcardtext: {
    fontWeight: 'bold',
    fontSize: 18
  },
  finalscore: {
    fontWeight: 'bold',
    fontSize: 60
  }
});