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

   var formWrapper = "<div id='contact-form-wrapper' class='lato'><form></form></div>";
   //var colOne = "<div class='column'></div>";
   var colTwo = "<div class='column'></div>";
   var inputName = "<label for='name'>Name</label><input class='form-text' name='name' type='text' />";
   var inputEmail = "<label for='email'>Email</label><input class='form-text' name='email' type='text' />";
   var inputSubject = "<label for='subject'>Subject</label><input class='form-text' name='subject' type='text' />";
   var inputMessage = "<label for='message'>Message</label><textarea class='form-message' cols='60' name='message' rows='8'></textarea>";
   var submit = "<div name='submit' class='form-submit lato' onclick='replaceWithSpinner()'><span id='contact-form-submit'>Submit</span></div>";

   /*colOne = $(colOne)
     .append(inputName)
     .append(inputEmail);*/

   colTwo = $(colTwo)
     .append(inputName)
     .append(inputEmail)
     .append(inputSubject)
     .append(inputMessage)
     .append(submit);

   formWrapper = $(formWrapper)
     .append(colTwo);

   content = $(content)
     .append(formWrapper);

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
