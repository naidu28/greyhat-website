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

var components = {
  "about" : [['component/about','about']],
  "events" : [['component/main-event', 'mainEvent'], ['component/events-list', 'eventsList']],
  "ctfs" : [['component/ctfs-current', 'ctfsCurrent'], ['component/ctfs-list', 'ctfsList']],
  "archive" : [['component/archive', 'archive']],
  "contact" : [['component/contact-form', 'contactForm'], ['component/contact-info', 'contactInfo']]
}

sessionStorage.setItem("currentPage", pageList[0]);

function changePage(nextPage) {
  if (sessionStorage.getItem("currentPage") == pageList[0]) {
    if (pageList[nextPage] != pageList[0]) {
      carouselStop();
      var about = $('#about');
      about.hide();
      about.remove();
      //requirejs.undef('about');
      /*var aboutNode = about.get();
      var parentNode = aboutNode.parentElement;
      console.log("parent element " +parentNode);
      parentNode.removeChild(aboutNode);*/
    }
  } else if (sessionStorage.getItem("currentPage") == pageList[1]) {
    if (pageList[nextPage] != pageList[1]) {
      var mainEvent = $('#main-event');
      mainEvent.hide();
      mainEvent.remove();
      //requirejs.undef('mainEvent');

      var eventsList = $('#events-list');
      eventsList.hide();
      eventsList.remove();
      //requirejs.undef('eventsList');
    }
  } else if (sessionStorage.getItem("currentPage") == pageList[2]) {
    if (pageList[nextPage] != pageList[2]) {
      var ctfsCurrent = $('#ctfs-current');
      ctfsCurrent.hide();
      ctfsCurrent.remove();
      //requirejs.undef('ctfsCurrent');

      var ctfsList = $('#ctfs-list');
      ctfsList.hide();
      ctfsList.remove();
      //requirejs.undef('ctfsList');
    }
  } else if (sessionStorage.getItem("currentPage") == pageList[3]) {
    if (pageList[nextPage] != pageList[3]) {
      var archive = $('#archive');
      archive.hide();
      archive.remove();
      //requirejs.undef('archive');
    }
  } else {
    if (pageList[nextPage] != pageList[4]) {
      var contactInfo = $('#contact-info');
      contactInfo.hide();
      contactInfo.remove();
      //requirejs.undef('contactInfo');

      var contactForm = $('#contact-form');
      contactForm.hide();
      contactForm.remove();
      //requirejs.undef('contactForm');
    }
  }

  loadObjects(nextPage);
}

function loadObjects(page) {
  var modules = components[page];

  console.log(modules);
  for (var i = 0; i < modules.length; i++) {
    var mod = modules[i];
    var href = mod[0];
    var name = mod[1];
    console.log("module " +mod);
    //require([href], function(name) {});
    eval(mod[1] + "()");
  }

  sessionStorage.setItem("currentPage", page);

  /*var elems = pageObjects[page];
  console.log(elems);
  for (var i = 0; i < elems.length; i++) {
    $(elems[i]).fadeIn(400);
    sessionStorage.setItem("currentPage", page);
    console.log(elems[i]);
  }*/

  //shitty code to artificially update url
  /*var url = window.location.href;
  var i = url.indexOf("#")
  var old = url.substring(i, url.length);
  var curr = "#" + page;
  window.location.href = url.replace(old, curr);*/
  fixUrl(page);
  //window.location.href = window.location.href + "#" + page;
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
  } else {
    fixUrl(data);
    $(widget).fadeIn(400);
  }
};

var fixUrl = function(page) {
  var url = window.location.href;
  var i = url.indexOf("#")

  if (i != -1) {
    var old = url.substring(i, url.length);
    var curr = "#" + page;
    window.location.href = url.replace(old, curr);
  } else {
    window.location.href = window.location.href + "#" + page;
  }
}

$(document).ready(function() {
  var modules = pageObjects[sessionStorage.getItem("currentPage")];
  modules.forEach(function() {$(this).remove();})

  if (window.location.href.includes("events")) {
    mainEvent();
    eventsList();
    sessionStorage.setItem("currentPage", "events");
  } else if (window.location.href.includes("ctfs")) {
    ctfsList();
    ctfsCurrent();
    sessionStorage.setItem("currentPage", "ctfs");
  } else if (window.location.href.includes("archive")) {
    archive();
    sessionStorage.setItem("currentPage", "archive");
  } else if (window.location.href.includes("contact")) {
    contactInfo();
    contactForm();
    sessionStorage.setItem("currentPage", "contact");
  } else {
    //handle cases for about - when url contains "about" or on default
    about();
    //$('#carousel-about').addClass("carousel slide");
    //$('#carousel-about').carousel({ interval: 2000 })
    sessionStorage.setItem("currentPage", "about");
    //carouselInit('carousel-about');
  }
});

function replaceWithSpinner() {
  var toReplace = $("#contact-form-submit");
  var parent = toReplace.parent();
  toReplace.fadeOut(200);
  window.setTimeout(function() {
    toReplace.remove();
    var spinner = '<div id="circleG" class="css-load"><div id="circleG_1" class="circleG"></div><div id="circleG_2" class="circleG"></div><div id="circleG_3" class="circleG"></div></div>';
    spinner = $(spinner);
    parent.append(spinner);
    window.setTimeout(function() {
      spinner.fadeOut(200);
      spinner.remove();
      parent.append(toReplace);
      toReplace.hide();
      toReplace.fadeIn(200);
    }, 2800);
  }, 200);
}
