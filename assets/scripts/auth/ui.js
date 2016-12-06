'use strict';

const app = require('../app.js');
const displaySignIn = require('../templates/display-sign-in.handlebars');
const displaySignUp = require('../templates/display-sign-up.handlebars');
const displayChangePassword = require('../templates/display-change-password.handlebars');
// const signedUp = require('../templates/signed-up.handlebars');
const signedIn = require('../templates/signed-in.handlebars');
const signedOut = require('../templates/signed-out.handlebars');
const showAdminFunctions = require('../templates/show-admin-functions.handlebars');
const showReviewsTemplate = require('../templates/review-listing.handlebars');

const clearSections = () => {
  $('#entry').html("");
  $('#content').html("");
  $('#notification').html("");
};

const success = (data) => {
  if (data) {
  } else {
  }
};

const failure = (error) => {
  console.error(error);
};

const displaySignUpSuccess = () => {
  $('#entry').html(displaySignUp());
};

// const displaySignInSuccess = () => {
//   $('#entry').html(displaySignIn());
// };

const displaySignInSuccess = () => {
// const displayAdminSignInSuccess = () => {
  $('#entry').html(displaySignIn());
  // $('nav').append('<button id="display-admin" class="btn btn-default">Cheddar!</button>');
};

const showAdminFunctionsSuccess = () => {
  $('#control').append(showAdminFunctions());
  $('nav').html("Nacho Favorite &#x1f33d; &#x1f9c0;");
};

const displayChangePasswordSuccess = () => {
  $('#entry').html(displayChangePassword());
};

const signUpSuccess = (data) => {
  app.user = data.user;
  $('#entry').html(displaySignIn());
};

const changePasswordSuccess = () => {
  $('#notification').html("Password Updated, giddyup!");
  $('#content').html("");

};

const signInSuccess = (data) => {
  app.user = data.user;
  // console.log(app.user);
  $('#control').html(signedIn());
  $('#entry').html("");
  if (app.user.id === 1) {
    $('nav').append('<button id="display-admin" class="btn btn-default">Cheddar!</button>');
  }
};

const signOutSuccess = () => {
  // console.log('User signed out successfully');
  app.user = null;
  $('#control').html(signedOut());
  clearSections();
  $('nav').html("Nacho Favorite &#x1f33d; &#x1f9c0;");
};

const getUsersSuccess = (users) => {
  clearSections();
  $('#content').html(showReviewsTemplate(users));

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(users);
};

module.exports = {
  success,
  failure,
  displaySignInSuccess,
  displaySignUpSuccess,
  displayChangePasswordSuccess,
  showAdminFunctionsSuccess,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  getUsersSuccess,
  changePasswordSuccess
};
