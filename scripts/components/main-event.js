define([], function() {
  function render() {
    var widget = "<div id='main-event' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";

    /*Google calendar code*/
    var gCal = '<object class="g-cal" data="https://calendar.google.com/calendar/embed?src=a4vdv100f32knidfuka1l7lhss%40group.calendar.google.com&ctz=America/New_York" frameborder="0" scrolling="no"></object>'
    /*End Google calendar code*/
    //set height as much as height of container
    gCal = $(gCal);
      //console.log("component height width " + )
    $(window).resize(function() {
      $('#main-event').children('.g-cal').height($('#main-event').children('.component-content').height() - 50)
        .width($('#main-event').children('.component-content').width() - 50);
    });

    content = $(content)
      .append(gCal);

    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);

    $('#appendable-root')
      .append(widget);

    gCal.height($('#main-event').children('.component-content').height() - 50)
      .width($('#main-event').children('.component-content').width() - 50);

    return widget;
  }

  return render();
});

function mainEvent() {
  function render() {
    var widget = "<div id='main-event' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";

    /*Google calendar code*/
    var gCal = '<object class="g-cal" data="https://calendar.google.com/calendar/embed?src=a4vdv100f32knidfuka1l7lhss%40group.calendar.google.com&ctz=America/New_York" frameborder="0" scrolling="no"></object>'
    /*End Google calendar code*/
    //set height as much as height of container
    gCal = $(gCal);
      //console.log("component height width " + )
    $(window).resize(function() {
      $('#main-event').children('.g-cal').height($('#main-event').children('.component-content').height() - 50)
        .width($('#main-event').children('.component-content').width() - 50);
    });

    content = $(content)
      .append(gCal);

    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);

    $('#appendable-root')
      .append(widget);

    gCal.height($('#main-event').children('.component-content').height() - 50)
      .width($('#main-event').children('.component-content').width() - 50);

    return widget;
  }

  return render();
}
