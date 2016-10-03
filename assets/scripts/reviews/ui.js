'use strict';

const showReviewsTemplate = require('../templates/review-listing.handlebars');
const showMyReviewsTemplate = require('../templates/my-review-listing.handlebars');
const displayCreateNewReview = require('../templates/display-create-new-review.handlebars');
const showNewReview = require('../templates/new-review.handlebars');

const displayCreateNewReviewSuccess = () => {
  $('#entry').html(displayCreateNewReview());
};

const getReviewsSuccess = (reviews) => {
  $('#content').html(showReviewsTemplate(reviews));
  $('#entry').html("");
  // $('#content').append(showReviewsTemplate({reviews}));

  console.log(reviews);
};

const getMyReviewsSuccess = (reviews) => {
  $('#content').html(showMyReviewsTemplate(reviews));
  $('#entry').html("");
  // $('#content').append(showReviewsTemplate({reviews}));

  console.log(reviews);
};

const clearReviews = () => {
  $('#content').html("");
  $('#entry').html("");
};

const failure = (error) => {
  console.error(error);
};

const createNewReviewSuccess = (review) => {
  // app.user = data.user;
  console.log(review);
  $('#notification').html("Review Created" + showNewReview(review));
};

module.exports = {
  displayCreateNewReviewSuccess,
  createNewReviewSuccess,
  getReviewsSuccess,
  getMyReviewsSuccess,
  clearReviews,
  failure,
};
