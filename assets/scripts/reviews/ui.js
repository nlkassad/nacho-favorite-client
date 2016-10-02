'use strict';

const showReviewsTemplate = require('../templates/review-listing.handlebars');
const showMyReviewsTemplate = require('../templates/my-review-listing.handlebars');

const getReviewsSuccess = (reviews) => {
  $('#content').html(showReviewsTemplate(reviews));
  // $('#content').append(showReviewsTemplate({reviews}));

  console.log(reviews);
};

const getMyReviewsSuccess = (reviews) => {
  $('#content').html(showMyReviewsTemplate(reviews));
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
  getMyReviewsSuccess,
  clearReviews,
  failure,
};
