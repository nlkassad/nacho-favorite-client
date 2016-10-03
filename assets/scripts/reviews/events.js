'use strict';

const getFormFields = require('../../../lib/get-form-fields.js');

const api = require('./api.js');
const ui = require('./ui.js');

const onDisplayCreateNewReview = (event) => {
  event.preventDefault();
  ui.displayCreateNewReviewSuccess();
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

const addHandlers = () => {
  $('#control').on('click','#getReviewsButton', onGetReviews);
  // $('#getReviewsButton').on('click', onGetReviews);
  $('#control').on('click','#getMyReviewsButton', onGetMyReviews);
  // $('#getMyReviewsButton').on('click', onGetMyReviews);
  $('#control').on('click','#clearReviewsButton', onClearReviews);
  // $('#clearReviewsButton').on('click', onClearReviews);
  $('#control').on('click','#display-create-new-review', onDisplayCreateNewReview);
  $('#entry').on('submit','#create-new-review', onCreateNewReview);
};

module.exports = {
  addHandlers,
};
