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


const clearDisplaySections = () => {
  $('#entry').html("");
  $('#content').html("");
  $('#notification').html("");};

const displayCreateNewReviewSuccess = (menu_items) => {
  clearDisplaySections();
  $('#entry').html(displayCreateNewReview(menu_items));
};

const displayCreateMenuItemSuccess = () => {
  clearDisplaySections();
  $('#entry').html(displayCreateMenuItem());
};

const displayFindReviewSuccess = () => {
  clearDisplaySections();
  $('#entry').html(displayFindReview());
};

const getReviewsSuccess = (reviews) => {
  clearDisplaySections();
  $('#content').html(showReviewsTemplate(reviews));

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(reviews);
};

const getMenuItemsSuccess = (menu_items) => {
  clearDisplaySections();
  console.log(menu_items);
  $('#content').html(showListingTemplate(menu_items));

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(menu_items);
};

const getRestaurantsSuccess = (restaurants) => {
  clearDisplaySections();
  $('#content').html(showListingTemplate(restaurants));

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(restaurants);
};

const getDishesSuccess = (dishes) => {
  clearDisplaySections();
  $('#content').html(showListingTemplate(dishes));

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(dishes);
};

const getMyReviewsSuccess = (reviews) => {
  clearDisplaySections();
  console.log(reviews);
  $('#content').html(showMyReviewsTemplate(reviews));

  // $('#content').append(showReviewsTemplate({reviews}));

  // console.log(reviews);
};

const clearReviews = () => {
  clearDisplaySections();
};

const failure = (error) => {
  console.error(error);
};

const createNewReviewSuccess = (review) => {
  // app.user = data.user;
  // console.log(review);
  clearDisplaySections();
  $('#notification').html("Review Created" + showNewReview(review));
};

const createMenuItemSuccess = (menu_item) => {
  // app.user = data.user;
  console.log(menu_item);
  clearDisplaySections();
  $('#notification').html("Menu Item Created");
};

const findReviewSuccess = (review) => {
  // app.user = data.user;
  console.log(review);
  clearDisplaySections();
  $('#content').html(showReview(review));
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
  clearDisplaySections();
  $('#notification').html("Review Updated!");
};

const deleteReviewSuccess = (review) => {
  // app.user = data.user;
  console.log(review);
  clearDisplaySections();
  $('#notification').html("Review Deleted!");
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
