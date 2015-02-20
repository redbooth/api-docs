$(function() {
  // Scrollspy
  var $window = $(window)
    , $body = $(document.body);

  $body.scrollspy({
    target: '.js-resource-navigation'
  });

  $window.on('load', function () {
    $body.scrollspy('refresh')
  });

  $('.js-resource-navigation').affix({
    offset: {
      top: 100
    }
  });

  $('.js-main-movile-nav').change(function() {
    document.location = $(this).find('option:selected').val();
  });
});
