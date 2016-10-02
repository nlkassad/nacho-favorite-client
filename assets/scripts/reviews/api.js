'use strict';

const app = require('../app.js');

let getReviews = function(){
  return $.ajax({
    url: app.host + "/reviews", // "http://book-json.herokuapp.com/books"
    method: 'GET',
    // dataType: 'json'
  });
};

module.exports = {
  getReviews,
};
