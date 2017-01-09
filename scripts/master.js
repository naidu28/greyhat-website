define([], function() {
  function ready() {
    for (var i = 0; i < args.length; i++) {
      console.log(args[i]);
      console.log("func " +func);
      args[i](func);
    }
  }

  return ready;
});
