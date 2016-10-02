'use strict';

const showReviewsTemplate = require('../templates/review-listing.handlebars');

const getReviewsSuccess = (reviews) => {
  $('#content').append(showReviewsTemplate({reviews}));
  // $('#content').append(showReviewsTemplate({reviews}));

  console.log(reviews);
};

const clearReviews = () => {
  $('#content').html("");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  getReviewsSuccess,
  clearReviews,
  failure,
};
