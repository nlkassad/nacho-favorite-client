'use strict';

const app = require('../app.js');
const displaySignIn = require('../templates/display-sign-in.handlebars');
const displaySignUp = require('../templates/display-sign-up.handlebars');
const displayChangePassword = require('../templates/display-change-password.handlebars');
// const signedUp = require('../templates/signed-up.handlebars');
const signedIn = require('../templates/signed-in.handlebars');
const signedOut = require('../templates/signed-out.handlebars');


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

const displayChangePasswordSuccess = () => {
  $('#entry').html(displayChangePassword());
};

const signUpSuccess = (data) => {
  app.user = data.user;
  $('#entry').html(displaySignIn());
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#control').html(signedIn());
  $('#entry').html("");
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('#control').html(signedOut());
  $('#entry').html("");
  $('#content').html("");
};

module.exports = {
  success,
  failure,
  displaySignInSuccess,
  displaySignUpSuccess,
  displayChangePasswordSuccess,
  signInSuccess,
  signUpSuccess,
  signOutSuccess
};
