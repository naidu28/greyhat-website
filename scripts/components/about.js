define([], function() {
  function render() {
    var widget = "<div id='about' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";
    var titlePara = "<p class='title'>This is my title</p>";


    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);

    console.log("a root" + document.getElementById("#appendable-root"));
    var dom = document.children;
    console.log("dom object " +dom.length);
    for (var i = 0; i < dom; i++) {
      console.log("dom item " +dom.item(i));
    }

    console.log("widget " +JSON.stringify($("#about")));
    $('#appendable-root')
      .append(widget);

    return widget;
  }

  return render();
});
