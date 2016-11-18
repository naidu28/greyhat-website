define([], function() {
  function ready() {
    var args = arguments;
    console.log(args);

    $(document).ready(function() {
      for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
        args[i]();
      }
    })
  }

  return ready;
});
