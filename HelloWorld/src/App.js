import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import { Header } from "./components";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components";

export default class App extends Component {
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
    apiKey: "AIzaSyANrDwz5mH7NROlc5IT8CvNbuWn8Xlf7qw",
    authDomain: "rnapp-6e47b.firebaseapp.com",
    databaseURL: "https://rnapp-6e47b.firebaseio.com",
    projectId: "rnapp-6e47b",
    storageBucket: "rnapp-6e47b.appspot.com",
    messagingSenderId: "838410636294"
});
}
render() {
return (
<View>
<Header headerText="Authentication" />
<LoginForm />
</View>
);
}
}

