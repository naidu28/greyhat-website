define([], function() {
  function ready() {
    var args = arguments;
    console.log(args);

    $(document).ready(function() {
      for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
        args[i](function(widget) {
          var ss = window.sessionStorage;
          var data = ss.getItem("currentPage");
          var widgetId = $(widget).attr('id');
          console.log("data " +data);
          console.log("widget id " +widgetId);
          if (data != widgetId) {
            $(widget).addClass('hide');
          }
        });
      }
    });
  }

  return ready;
});
