'use strict';

const showReviewsTemplate = require('../templates/review-listing.handlebars');
const showListingTemplate = require('../templates/listing.handlebars');
const showMyReviewsTemplate = require('../templates/my-review-listing.handlebars');
const displayCreateNewReview = require('../templates/display-create-new-review.handlebars');
const showNewReview = require('../templates/new-review.handlebars');
const displayFindReview = require('../templates/display-find-review.handlebars');
const showReview = require('../templates/show-review.handlebars');
const displayEditReview = require('../templates/display-edit-review.handlebars');
const displayCreateMenuItem = require('../templates/display-create-menu-item.handlebars');




const displayCreateNewReviewSuccess = (menu_items) => {
  $('#entry').html(displayCreateNewReview(menu_items));
};

const displayCreateMenuItemSuccess = () => {
  $('#entry').html(displayCreateMenuItem());
};

const displayFindReviewSuccess = () => {
  $('#entry').html(displayFindReview());
};

const getReviewsSuccess = (reviews) => {
  $('#content').html(showReviewsTemplate(reviews));
  $('#entry').html("");
  $('#notification').html("");

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(reviews);
};

const getMenuItemsSuccess = (menu_items) => {
  $('#content').html(showListingTemplate(menu_items));
  $('#entry').html("");
  $('#notification').html("");

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(menu_items);
};

const getRestaurantsSuccess = (restaurants) => {
  $('#content').html(showListingTemplate(restaurants));
  $('#entry').html("");
  $('#notification').html("");

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(restaurants);
};

const getDishesSuccess = (dishes) => {
  $('#content').html(showListingTemplate(dishes));
  $('#entry').html("");
  $('#notification').html("");

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(dishes);
};

const getMyReviewsSuccess = (reviews) => {
  $('#content').html(showMyReviewsTemplate(reviews));
  $('#entry').html("");
  $('#notification').html("");

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(reviews);
};

const clearReviews = () => {
  $('#content').html("");
  $('#entry').html("");
  $('#notification').html("");
};

const failure = (error) => {
  // console.error(error);
};

const createNewReviewSuccess = (review) => {
  // app.user = data.user;
  // console.log(review);
  $('#notification').html("Review Created" + showNewReview(review));
  $('#entry').html("");
};

const createMenuItemSuccess = (menu_item) => {
  // app.user = data.user;
  // console.log(menu_item);
  $('#notification').html("Menu Item Created");
  $('#entry').html("");
};

const findReviewSuccess = (review) => {
  // app.user = data.user;
  // console.log(review);
  $('#content').html(showReview(review));
  $('#entry').html("");
  $('#notification').html("");
};

const displayEditReviewSuccess = (data) => {
  // app.user = data.user;
  let data_id = data.id;
  // console.log(data);
  // console.log(data_id);
  $(data).after(displayEditReview({data_id}));
  // $('#entry').html("");
};

const editReviewSuccess = (review) => {
  // app.user = data.user;
  // console.log(review);
  $('#notification').html("Review Updated!");
  $('#entry').html("");
  $('#content').html("");
};

const deleteReviewSuccess = (review) => {
  // app.user = data.user;
  // console.log(review);
  $('#notification').html("Review Deleted!");
  $('#entry').html("");
  $('#content').html("");
};

module.exports = {
  displayCreateNewReviewSuccess,
  displayCreateMenuItemSuccess,
  displayFindReviewSuccess,
  displayEditReviewSuccess,
  createNewReviewSuccess,
  createMenuItemSuccess,
  editReviewSuccess,
  findReviewSuccess,
  getReviewsSuccess,
  getMenuItemsSuccess,
  getRestaurantsSuccess,
  getDishesSuccess,
  getMyReviewsSuccess,
  clearReviews,
  deleteReviewSuccess,
  failure,
};
