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


	render() {

		return (
			<div> 
				<input id="email" type="email" placeholder="Enter your email" ref="email"/> <br />
				<input id="pass" type="password" placeholder="Enter your Password" ref="password"/> <br />

			</div>);
	}
}

export default Authen;