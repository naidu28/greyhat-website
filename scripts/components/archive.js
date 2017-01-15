define([], function() {
  function render() {
    var widget = "<div id='archive' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";

    var yChannel = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLO5wkOH39hDoEfv27wzIldQA5I1rm_g8Y" frameborder="0" allowfullscreen></iframe>'

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

function archive() {
  function render() {
    var widget = "<div id='archive' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";

    var yChan = '<iframe class="y-chan" src="https://www.youtube.com/embed/videoseries?list=PLO5wkOH39hDoEfv27wzIldQA5I1rm_g8Y" frameborder="0" allowfullscreen></iframe>';
    yChan = $(yChan);

    $(window).resize(function() {
      $('#archive').children('.y-chan').height($('#archive').children('.component-content').height() - 50)
        .width($('#archive').children('.component-content').width() - 50);
    });

    content = $(content)
      .append(yChan);

    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);

    $('#appendable-root')
      .append(widget);

    yChan.height($('#archive').children('.component-content').height() - 50)
      .width($('#archive').children('.component-content').width() - 50);

    return widget;
  }

  return render();
}
