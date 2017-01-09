/*
 * This service prepares the DOM for usage in this application
 * Applies page transitions and related effects
 */
var pageList = [
  "about", "events", "ctfs", "archive", "contact"
];

var pageObjects = [
  [$('#about')],
  [$('#main-event'), $('#events-list')],
  [$('#ctfs-current'), $('#ctfs-list')],
  [$('#archive')],
  [$('#contact-info'), $('#contact-form')]
]

var currentPage = pageList[0];

sessionStorage.setItem("currentPage", currentPage);

function changePage(nextPage) {
  if (currentPage == pageList[0]) {
    if (pageList[nextPage] != pageList[0]) {
      $('#about').addClass('hide');
    }
  } else if (currentPage == pageList[1]) {
    if (pageList[nextPage] != pageList[1]) {
      $('#main-event').addClass('hide');
      $('#events-list').addClass('hide');
    }
  } else if (currentPage == pageList[2]) {
    if (pageList[nextPage] != pageList[2]) {
      $('#ctfs-current').addClass('hide');
      $('#ctfs-list').addClass('hide');
    }
  } else if (currentPage == pageList[3]) {
    if (pageList[nextPage] != pageList[3]) {
      $('#archive').addClass('hide');
    }
  } else {
    if (pageList[nextPage] != pageList[4]) {
      $('#contact-info').addClass('hide');
      $('#contact-form').addClass('hide');
    }
  }

  loadObjects(nextPage);
}

function loadObjects(page) {
  var elems = pageObjects[pageList[page]];
  for (var i = 0; i < elems.length; i++) {
    elems[i].removeClass('hide');
  }
}

function cleanLoad() {
  for (var i = 0; i < pageObjects.length; i++) {
    if (i != currentPage) {
      var elems = pageObjects[i];
      console.log("elems list" +JSON.stringify(elems));
      for (var j = 0; j < elems.length; j++) {
        console.log("ELEMS" + JSON.stringify(elems[i]));
        elems[i].addClass('hide');
      }
    }
  }
}

var showOrHide = function(widget) {
  console.log(sessionStorage);
  var data = sessionStorage.getItem("currentPage");
  var widgetId = $(widget).attr('id');
  console.log("data " +data);
  console.log("widget id " +widgetId);
  if (data != widgetId) {
    $(widget).addClass('hide');
  }
};
