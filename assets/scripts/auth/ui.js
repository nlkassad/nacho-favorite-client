'use strict';

const app = require('../app.js');
const displaySignIn = require('../templates/display-sign-in.handlebars');
const displaySignUp = require('../templates/display-sign-up.handlebars');
// const signedUp = require('../templates/signed-up.handlebars');
const signedIn = require('../templates/signed-in.handlebars');

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const displaySignUpSuccess = () => {
  $('#entry').html(displaySignUp());
};

const displaySignInSuccess = () => {
  $('#entry').html(displaySignIn());
};

const signUpSuccess = (data) => {
  app.user = data.user;
  $('#entry').html(displaySignIn());
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#control').html(signedIn());
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
};

module.exports = {
  success,
  failure,
  displaySignInSuccess,
  displaySignUpSuccess,
  signInSuccess,
  signUpSuccess,
  signOutSuccess
};
