define([], function() {
  function render() {
    var widget = "<div id='ctfs-list' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";

    var gCal = '<object class="g-cal" data="https://calendar.google.com/calendar/embed?src=g9eho2vo077sav1ujntd13fiog%40group.calendar.google.com&ctz=America/New_York" frameborder="0" scrolling="no"></object>'
    /*End Google calendar code*/
    //set height as much as height of container
    gCal = $(gCal);
      //console.log("component height width " + )
    $(window).resize(function() {
      $('#ctfs-list').children('.g-cal').height($('#ctfs-list').children('.component-content').height() - 50)
        .width($('#ctfs-list').children('.component-content').width() - 50);
    });

    /*$('#ctfs-list').change(function(event) {
      console.log("there was a change in the element");
      $('#ctfs-list').children('.g-cal').height($('#ctfs-list').children('.component-content').height() - 50)
        .width($('#ctfs-list').children('.component-content').width() - 50);
    });*/


    content = $(content)
      .append(gCal);

    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);

    $('#appendable-root')
      .append(widget);

    console.log("width of component " +$('#ctfs-list').children('.component-content').outerWidth());
    gCal.height($('#ctfs-list').children('.component-content').height() - 50)
      .width($('#ctfs-list').children('.component-content').width() - 50);

    var muteObserver = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        console.log("it was changed");
        if (mutation.attributeName == "style") {
          console.log("the style attribute was changed")
          $('#ctfs-list').children('.g-cal').height($('#ctfs-list').children('.component-content').height() - 50)
            .width($('#ctfs-list').children('.component-content').width() - 50);
        }
      });
    });

    var config = { attributes: true, subtree: true }
    muteObserver.observe(document.getElementById("ctfs-list").children.item(2), config);


    return widget;
  }


  return render();
});

function ctfsList() {
 function render() {
   var widget = "<div id='ctfs-list' class='column'></div>";
   var header = "<div class='component-header'></div>";
   var divider = "<div class='component-divider'></div>";
   var content = "<div class='component-content'></div>";

   var gCal = '<object class="g-cal" data="https://calendar.google.com/calendar/embed?src=g9eho2vo077sav1ujntd13fiog%40group.calendar.google.com&ctz=America/New_York" frameborder="0" scrolling="no"></object>'
   /*End Google calendar code*/
   //set height as much as height of container
   gCal = $(gCal);
     //console.log("component height width " + )
   $(window).resize(function() {
     $('#ctfs-list').children('.g-cal').height($('#ctfs-list').children('.component-content').height() - 50)
       .width($('#ctfs-list').children('.component-content').width() - 50);
   });

   /*$('#ctfs-list').change(function(event) {
     console.log("there was a change in the element");
     $('#ctfs-list').children('.g-cal').height($('#ctfs-list').children('.component-content').height() - 50)
       .width($('#ctfs-list').children('.component-content').width() - 50);
   });*/


   content = $(content)
     .append(gCal);

   widget = $(widget)
     .append(header)
     .append(divider)
     .append(content);

   widget.hide();

   $('#appendable-root')
     .append(widget);

   widget.fadeIn(400);

   console.log("width of component " +$('#ctfs-list').children('.component-content').outerWidth());
   gCal.height($('#ctfs-list').children('.component-content').height() - 50)
     .width($('#ctfs-list').children('.component-content').width() - 50);

   var muteObserver = new MutationObserver(function(mutations) {
     mutations.forEach(function(mutation) {
       console.log("it was changed");
       if (mutation.attributeName == "style") {
         console.log("the style attribute was changed")
         $('#ctfs-list').children('.g-cal').height($('#ctfs-list').children('.component-content').height() - 50)
           .width($('#ctfs-list').children('.component-content').width() - 50);
       }
     });
   });

   var config = { attributes: true, subtree: true }
   muteObserver.observe(document.getElementById("ctfs-list").children.item(2), config);


   return widget;
 }


 return render();
}
