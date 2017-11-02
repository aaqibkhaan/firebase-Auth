import React, { Component } from 'react';

var firebase = require('firebase');

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDF1x3ItqP0_UxVshNE_3mivar_J8o3Bgc",
    authDomain: "fir-auth-453.firebaseapp.com",
    databaseURL: "https://fir-auth-453.firebaseio.com",
    projectId: "fir-auth-453",
    storageBucket: "fir-auth-453.appspot.com",
    messagingSenderId: "254200862078"
  };
  firebase.initializeApp(config);



class Authen extends Component {

	login(event){
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		console.log(email, password);

		const auth = firebase.auth();

		
		const promise = auth.signInWithEmailAndPassword(email, password);

		promise.then(e => {
			var lout = document.getElementById('logout');


			lout.classList.remove('hide');

		});
		
		promise.catch(e => {
			var errorMessage = e.message;
			console.log(errorMessage);
			this.setState({errorMessage});
		});

	}

	signUp(event) {

		const email = this.refs.email.value;
		const password = this.refs.password.value;
		console.log("Sign UP" + email, password);

		const promise = firebase.auth().createUserWithEmailAndPassword(email, password);

		promise
		.then(user => {

			const errorMessage = "Welcome" + user.email;
			firebase.database().ref('users/'+user.uid).set({
				email:user.email
			});
			console.log(user);
			this.setState({errorMessage});
		})
		.catch(e => {

			var errorMessage = e.message;
			console.log("Sign Up" + errorMessage);
			this.setState({errorMessage});
		});
	}

	logOUt(event) {

		firebase.auth().signOut();

			var lout = document.getElementById('logout');

			lout.classList.add('hide');

	}

	constructor(props) {

		super(props);
		this.state = {
			errorMessage : ''

		};
		this.login = this.login.bind(this);
		this.signUp = this.signUp.bind(this);
		this.logOUt = this.logOUt.bind(this);

	}

	render() {

		return (
			<div> 
				<input id="email" type="email" placeholder="Enter your email" ref="email"/> <br />
				<input id="password" type="password" placeholder="Enter your Password" ref="password"/> <br />

				<p>{this.state.errorMessage} </p>
				<button onClick={this.login}> Log In </button>
				<button onClick={this.signUp}> Sing Up </button>
				<button onClick={this.logOUt} id="logout" className="hide"> Log Out</button>

			</div>);
	}
}

export default Authen;