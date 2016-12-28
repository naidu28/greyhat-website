define([], function(callback) {
  function render(cb) {
    var widget = "<div id='archive' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";


    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);

    $('#appendable-root')
      .append(widget);

    cb(widget);
  }

  return render(callback);
});
