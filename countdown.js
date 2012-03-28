(function( $ ) {
  $.fn.countdown = function(options) {

    // Default Settings
    var settings = $.extend( {
      'limit'       : 85,
      'counter_div' : '_countdown_counter_'
    }, options);

    this.after($('<div>').attr({ class: settings['counter_div'] }));

    // Plugin
    return this.each(function() {

      var limit = settings['limit'];
      var counter = $(this).next();

      counter.addClass('_countdown_counter_');
      counter.html('Please limit your comment to '+limit+' characters.');

      $(this).keyup(function(){
        var new_length = $(this).val().length;
        if (new_length > limit)
        {
          text = $(this);
          text.val(text.val().substring(0, limit))
          return false;
        }
        else
        {
          counter.html('You have '+ (limit - new_length) +' characters left.');
          return true;
        }
      });

      $(this).blur(function(){
        counter.html('You have used '+ $(this).val().length +' of ' + limit + ' characters.');
      });
    });
  };
})( jQuery );