/*
 * This service prepares the DOM for usage in this application
 * Applies page transitions and related effects
 */
var pageList = [
  "about", "events", "ctfs", "archive", "contact"
];

var pageObjects = {
  "about" : ['#about'],
  "events" : ['#main-event', '#events-list'],
  "ctfs" : ['#ctfs-current', '#ctfs-list'],
  "archive" : ['#archive'],
  "contact" : ['#contact-info', '#contact-form']
}

sessionStorage.setItem("currentPage", pageList[0]);

function changePage(nextPage) {
  if (sessionStorage.getItem("currentPage") == pageList[0]) {
    if (pageList[nextPage] != pageList[0]) {
      $('#about').hide();
    }
  } else if (sessionStorage.getItem("currentPage") == pageList[1]) {
    if (pageList[nextPage] != pageList[1]) {
      $('#main-event').hide();
      $('#events-list').hide();
    }
  } else if (sessionStorage.getItem("currentPage") == pageList[2]) {
    if (pageList[nextPage] != pageList[2]) {
      $('#ctfs-current').hide();
      $('#ctfs-list').hide();
    }
  } else if (sessionStorage.getItem("currentPage") == pageList[3]) {
    if (pageList[nextPage] != pageList[3]) {
      $('#archive').hide();
    }
  } else {
    if (pageList[nextPage] != pageList[4]) {
      $('#contact-info').hide();
      $('#contact-form').hide();
    }
  }

  loadObjects(nextPage);
}

function loadObjects(page) {
  var elems = pageObjects[page];
  console.log(elems);
  for (var i = 0; i < elems.length; i++) {
    $(elems[i]).show();
    sessionStorage.setItem("currentPage", page);
    console.log(elems[i]);
  }
}

/*function cleanLoad() {
  for (var i = 0; i < pageObjects.length; i++) {
    if (i != currentPage) {
      var elems = pageObjects[i];
      console.log("elems list" +JSON.stringify(elems));
      for (var j = 0; j < elems.length; j++) {
        console.log("ELEMS" + JSON.stringify(elems[i]));
        elems[i].hide();
      }
    }
  }
}*/

var showOrHide = function(widget) {
  console.log(sessionStorage);
  var data = sessionStorage.getItem("currentPage");
  var widgetId = $(widget).attr('id');
  console.log("data " +data);
  console.log("widget id " +widgetId);
  if (data != widgetId) {
    $(widget).hide();
  }
};
