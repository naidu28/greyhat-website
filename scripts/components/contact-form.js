define([], function() {
  function render() {
    var widget = "<div id='contact-form' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";


    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);

    $('#appendable-root')
      .append(widget);

    return widget;
  }

  return render();
});

function contactForm() {
 function render() {
   var widget = "<div id='contact-form' class='column'></div>";
   var header = "<div class='component-header'></div>";
   var divider = "<div class='component-divider'></div>";
   var content = "<div class='component-content'></div>";


   widget = $(widget)
     .append(header)
     .append(divider)
     .append(content);

   widget.hide();

   $('#appendable-root')
     .append(widget);

   widget.fadeIn(400);
   
   return widget;
 }

 return render();
}
