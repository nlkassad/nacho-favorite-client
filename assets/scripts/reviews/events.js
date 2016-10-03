'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

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

const addHandlers = () => {
  $('#control').on('click','#getReviewsButton', onGetReviews);
  // $('#getReviewsButton').on('click', onGetReviews);
  $('#control').on('click','#getMyReviewsButton', onGetMyReviews);
  // $('#getMyReviewsButton').on('click', onGetMyReviews);
  $('#control').on('click','#clearReviewsButton', onClearReviews);
  // $('#clearReviewsButton').on('click', onClearReviews);
};

module.exports = {
  addHandlers,
};
