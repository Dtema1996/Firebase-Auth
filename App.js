import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm'

export default class App extends React.Component {
  componentDidMount() {
    const config = {
    apiKey: "AIzaSyCAeflycnHxcW8UScbzOOBOHN3BDmHZY50",
    authDomain: "one-time-password-4572f.firebaseapp.com",
    databaseURL: "https://one-time-password-4572f.firebaseio.com",
    projectId: "one-time-password-4572f",
    storageBucket: "one-time-password-4572f.appspot.com",
    messagingSenderId: "478685667372"
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
