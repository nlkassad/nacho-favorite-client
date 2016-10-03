'use strict';

const app = require('../app.js');

let getReviews = function(){
  return $.ajax({
    url: app.host + "/reviews", // "http://book-json.herokuapp.com/books"
    method: 'GET',
    // dataType: 'json'
  });
};

let getMyReviews = function(){
  return $.ajax({
    url: app.host + "/reviews", // "http://book-json.herokuapp.com/books"
    method: 'GET',
    // dataType: 'json'
  });
};

const createNewReview = (data) => {
  return $.ajax({
    url: app.host + '/reviews',
    method: "POST",
    data: data,
  });
};

const findReview = (data) => {
  let item_search = data.menu_item.id;
  console.log(item_search);
  return $.ajax({
    url: app.host + '/menu_items/' + item_search,
    method: "get",
    data: data,
  });
};

module.exports = {
  getReviews,
  getMyReviews,
  createNewReview,
  findReview
};
