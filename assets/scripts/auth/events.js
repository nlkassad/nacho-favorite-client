'use strict';
//
const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api');
const ui = require('./ui');

const onDisplaySignUp = (event) => {
  event.preventDefault();
  ui.displaySignUpSuccess();
};

const onDisplaySignIn = (event) => {
  event.preventDefault();
  ui.displaySignInSuccess();
};

const onDisplayChangePassword = (event) => {
  event.preventDefault();
  ui.displayChangePasswordSuccess();
};

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const showAdminFunctions = (event) => {
  event.preventDefault();
  ui.showAdminFunctionsSuccess();
};

const onGetUsers = (event) => {
  event.preventDefault();
  api.getUsers()
  .done(ui.getUsersSuccess)
  .fail(ui.failure);
};


const addHandlers = () => {
  // $('#display-sign-up').on('click', onDisplaySignUp);
  // $('#display-sign-in').on('click', onDisplaySignIn);
  $('#control').on('click', '#display-sign-up', onDisplaySignUp);
  $('#control').on('click', '#display-sign-in', onDisplaySignIn);
  // $('#sign-up').on('submit', onSignUp);
  $('#entry').on('submit','#sign-up', onSignUp);
  $('#entry').on('submit','#sign-in', onSignIn);
  $('#entry').on('submit','#change-password', onChangePassword);
  // $('#sign-in').on('submit', onSignIn);
  // $('#sign-out').on('submit', onSignOut);
  $('#control').on('click','#sign-out', onSignOut);
  $('#control').on('click','#display-change-password', onDisplayChangePassword);
  $('nav').on('click', '#display-admin', showAdminFunctions);
  $('#control').on('click','#get-users', onGetUsers);

  // $('#change-password').on('submit', onChangePassword);


};
//
module.exports = {
  addHandlers,
};
