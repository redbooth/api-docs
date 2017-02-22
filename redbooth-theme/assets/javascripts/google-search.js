$(function() {
  var original_google_search = $('.js-google-search-box');
  $('.js-search-box').replaceWith(original_google_search.html());
  original_google_search.remove();
});
