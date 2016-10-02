'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const onGetReviews = (event) => {
  event.preventDefault();
  api.getReviews()
  .done(ui.getReviewsSuccess)
  .fail(ui.failure);
};

const onClearReviews = (event) => {
  event.preventDefault();
  ui.clearReviews();
};

const addHandlers = () => {
  $('#getReviewsButton').on('click', onGetReviews);
  $('#clearReviewsButton').on('click', onClearReviews);
};

module.exports = {
  addHandlers,
};
