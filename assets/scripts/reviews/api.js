'use strict';

const app = require('../app.js');

let getReviews = function(){
  return $.ajax({
    url: app.host + "/reviews", // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    // dataType: 'json'
  });
};

let getMyReviews = function(){
  return $.ajax({
    url: app.host + "/my-reviews", // "http://book-json.herokuapp.com/books"
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    // dataType: 'json'
  });
};

const createNewReview = (data) => {
  return $.ajax({
    url: app.host + '/reviews',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const findReview = (data) => {
  let item_search = data.menu_item.id;
  console.log(item_search);
  return $.ajax({
    url: app.host + '/menu_items/' + item_search,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const editReview = (data, data_id) => {
  let review_id = data_id;
  console.log(review_id);
  return $.ajax({
    url: app.host + '/reviews/' + review_id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const deleteReview = (data_id) => {
  let review_id = data_id;
  console.log(review_id);
  return $.ajax({
    url: app.host + '/reviews/' + review_id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  getReviews,
  getMyReviews,
  createNewReview,
  editReview,
  findReview,
  deleteReview
};
