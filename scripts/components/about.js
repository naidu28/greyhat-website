define([], function(callback) {
  function render(cb) {
    var widget = "<div id='about' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";


    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);

    $('#appendable-root')
      .append(widget);


    console.log("callback " +cb);
    cb(widget);
  }

  console.log ("cb " +callback);
  return render(callback);
});