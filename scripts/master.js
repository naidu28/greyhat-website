var ready = function() {
  var args = arguments;

  $(document).ready(function() {
    for (var i = 0; i < args.length; i++) {
      args();
    }
  })
}
