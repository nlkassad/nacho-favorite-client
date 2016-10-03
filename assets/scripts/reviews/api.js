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

module.exports = {
  getReviews,
  getMyReviews,
  createNewReview,
};
