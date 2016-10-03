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

const addHandlers = () => {
  $('#control').on('click','#getReviewsButton', onGetReviews);
  // $('#getReviewsButton').on('click', onGetReviews);
  $('#control').on('click','#getMyReviewsButton', onGetMyReviews);
  // $('#getMyReviewsButton').on('click', onGetMyReviews);
  $('#control').on('click','#clearReviewsButton', onClearReviews);
  // $('#clearReviewsButton').on('click', onClearReviews);
  $('#control').on('click','#display-create-new-review', onDisplayCreateNewReview);
  $('#control').on('click','#display-find-review', onDisplayFindReview);

  $('#entry').on('submit','#create-new-review', onCreateNewReview);
  $('#entry').on('submit','#find-review', onFindReview);
};

module.exports = {
  addHandlers,
};
