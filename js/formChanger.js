$(document).ready(function() {
  var $toggleHandler = $('input[data-toggle]');
  $toggleHandler.on('change', function() {
    var connect = $(this).data('toggle');
    var $target = $('[data-toggle-target]');

    if (connect === 'show') {
      $target.addClass('is-visible');
    } else {
      $target.removeClass('is-visible');
    }
  });
});
