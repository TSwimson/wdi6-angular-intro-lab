var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.book_attrs = [
    {name:'name'},
    {name:'title'},
    {name:'price'}
  ];
  $scope.cart = [books[2]];
  //Code to manage cart goes here
  $scope.cartTotal = function () {
    var i = 0;
    angular.forEach($scope.cart, function(b, index) {
      i = i + b.price;
    });
    return i;
  };

  $scope.addBookToCart = function(book) {
    if ($scope.cart.indexOf(book) > -1 ) {

    } else {
      $scope.cart.push(book);
    }
  };
};
