'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onDisplayCreateNewReview = (event) => {
  event.preventDefault();
  ui.displayCreateNewReviewSuccess();
};

const onDisplayFindReview = (event) => {
  event.preventDefault();
  ui.displayFindReviewSuccess();
};

const onGetReviews = (event) => {
  event.preventDefault();
  api.getReviews()
  .done(ui.getReviewsSuccess)
  .fail(ui.failure);
};

const onGetMenuItems = (event) => {
  event.preventDefault();
  api.getMenuItems()
  .done(ui.getMenuItemsSuccess)
  .fail(ui.failure);
};

const onGetRestaurants = (event) => {
  event.preventDefault();
  api.getRestaurants()
  .done(ui.getRestaurantsSuccess)
  .fail(ui.failure);
};

const onGetDishes = (event) => {
  event.preventDefault();
  api.getDishes()
  .done(ui.getDishesSuccess)
  .fail(ui.failure);
};

const onGetMyReviews = (event) => {
  event.preventDefault();
  api.getMyReviews()
  .done(ui.getMyReviewsSuccess)
  .fail(ui.failure);
};

const onClearReviews = (event) => {
  event.preventDefault();
  ui.clearReviews();
};

const onCreateNewReview = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.createNewReview(data)
  .done(ui.createNewReviewSuccess)
  .fail(ui.failure);
};

const onFindReview = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.findReview(data)
  .done(ui.findReviewSuccess)
  .fail(ui.failure);
};

const onDisplayEditReview = (event) => {
  event.preventDefault();
  // $(event.target).after("Edit");
  let data = event.target;
  console.log(data);
  ui.displayEditReviewSuccess(data);
};

const onEditReview = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  let data_id = event.target.name;
  console.log(data, data_id);
  api.editReview(data, data_id)
  .done(ui.editReviewSuccess)
  .fail(ui.failure);
};

const onDeleteReview = (event) => {
  event.preventDefault();
  let data_id = event.target.id;
  console.log(data_id);
  api.deleteReview(data_id)
  .done(ui.deleteReviewSuccess)
  .fail(ui.failure);
};

const onVote = (event) => {
  event.preventDefault();
  let vote = event.target.name;
  document.getElementById("review-rating").value = vote;
  // console.log(vote);
  // $('#review-rating').name=vote;
  // console.log('#review-rating');
};

const addHandlers = () => {
  $('#control').on('click','#getReviewsButton', onGetReviews);

  $('#control').on('click','#get-menu-items', onGetMenuItems);
  $('#control').on('click','#get-restaurants', onGetRestaurants);
  $('#control').on('click','#get-dishes', onGetDishes);

  // $('#getReviewsButton').on('click', onGetReviews);
  $('#control').on('click','#getMyReviewsButton', onGetMyReviews);
  // $('#getMyReviewsButton').on('click', onGetMyReviews);
  $('#control').on('click','#clearReviewsButton', onClearReviews);
  // $('#clearReviewsButton').on('click', onClearReviews);
  $('#control').on('click','#display-create-new-review', onDisplayCreateNewReview);
  $('#control').on('click','#display-find-review', onDisplayFindReview);

  $('#entry').on('submit','#create-new-review', onCreateNewReview);
  $('#entry').on('submit','#find-review', onFindReview);
  $('#entry').on('click','.vote', onVote);
  $('#content').on('click','.display-edit-review', onDisplayEditReview);
  $('#content').on('submit','.edit-review', onEditReview);
  $('#content').on('click','.delete-review', onDeleteReview);
};

module.exports = {
  addHandlers,
};
