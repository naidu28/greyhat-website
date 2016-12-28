/*
 * This service prepares the DOM for usage in this application
 * Applies page transitions and related effects
 */
var pageEnum = Object.freeze({
  ABOUT: 0,
  EVENTS: 1,
  CTFS: 2,
  ARCHIVE: 3,
  CONTACT: 4
});

var pageObjects = [
  [$('#about')],
  [$('#main-event'), $('#events-list')],
  [$('#ctfs-current'), $('#ctfs-list')],
  [$('#archive')],
  [$('#contact-info'), $('#contact-form')]
]

var currentPage = pageEnum.ABOUT;

function changePage(nextPage) {
  if (currentPage == pageEnum.ABOUT) {
    if (pageEnum[nextPage] != pageEnum.ABOUT) {
      $('#about').addClass('hide');
    }
  } else if (currentPage == pageEnum.EVENTS) {
    if (pageEnum[nextPage] != pageEnum.EVENTS) {
      $('#main-event').addClass('hide');
      $('#events-list').addClass('hide');
    }
  } else if (currentPage == pageEnum.CTFS) {
    if (pageEnum[nextPage] != pageEnum.CTFS) {
      $('#ctfs-current').addClass('hide');
      $('#ctfs-list').addClass('hide');
    }
  } else if (currentPage == pageEnum.ARCHIVE) {
    if (pageEnum[nextPage] != pageEnum.ARCHIVE) {
      $('#archive').addClass('hide');
    }
  } else {
    if (pageEnum[nextPage] != pageEnum.CONTACT) {
      $('#contact-info').addClass('hide');
      $('#contact-form').addClass('hide');
    }
  }

  loadObjects(nextPage);
}

function loadObjects(page) {
  var elems = pageObjects[pageEnum[page]];
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
