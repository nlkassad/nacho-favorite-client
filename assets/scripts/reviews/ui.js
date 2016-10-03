'use strict';

const showReviewsTemplate = require('../templates/review-listing.handlebars');
const showMyReviewsTemplate = require('../templates/my-review-listing.handlebars');
const displayCreateNewReview = require('../templates/display-create-new-review.handlebars');
const showNewReview = require('../templates/new-review.handlebars');
const displayFindReview = require('../templates/display-find-review.handlebars');
const showReview = require('../templates/show-review.handlebars');
const displayEditReview = require('../templates/display-edit-review.handlebars');



const displayCreateNewReviewSuccess = () => {
  $('#entry').html(displayCreateNewReview());
};

const displayFindReviewSuccess = () => {
  $('#entry').html(displayFindReview());
};

const getReviewsSuccess = (reviews) => {
  $('#content').html(showReviewsTemplate(reviews));
  $('#entry').html("");
  $('#notification').html("");

  // $('#content').append(showReviewsTemplate({reviews}));

  console.log(reviews);
};

const getMyReviewsSuccess = (reviews) => {
  $('#content').html(showMyReviewsTemplate(reviews));
  $('#entry').html("");
  $('#notification').html("");

  // $('#content').append(showReviewsTemplate({reviews}));

  console.log(reviews);
};

const clearReviews = () => {
  $('#content').html("");
  $('#entry').html("");
  $('#notification').html("");
};

const failure = (error) => {
  console.error(error);
};

const createNewReviewSuccess = (review) => {
  // app.user = data.user;
  console.log(review);
  $('#notification').html("Review Created" + showNewReview(review));
  $('#entry').html("");
};

const findReviewSuccess = (review) => {
  // app.user = data.user;
  console.log(review);
  $('#content').html(showReview(review));
  $('#entry').html("");
  $('#notification').html("");
};

const displayEditReviewSuccess = (data) => {
  // app.user = data.user;
  let data_id = data.id;
  console.log(data);
  console.log(data_id);
  $(data).after(displayEditReview({data_id}));
  // $('#entry').html("");
};

const editReviewSuccess = (review) => {
  // app.user = data.user;
  console.log(review);
  $('#notification').html("Review Updated!");
  $('#entry').html("");
  $('#content').html("");
};

module.exports = {
  displayCreateNewReviewSuccess,
  displayFindReviewSuccess,
  displayEditReviewSuccess,
  createNewReviewSuccess,
  editReviewSuccess,
  findReviewSuccess,
  getReviewsSuccess,
  getMyReviewsSuccess,
  clearReviews,
  failure,
};
