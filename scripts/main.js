requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        lib: '../lib',
        component: 'components/',
        service: 'services/'
    }
});

// Start the main app logic.
/*requirejs(['events-widget', '', 'app/sub'],
function   ($,        canvas,   sub) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});*/

/*require(['domReady'], function(domReady) {
  domReady(function () {
    require(['component/about', 'component/main-event', 'component/events-list', 'component/ctfs-list', 'component/ctfs-current', 'component/archive', 'component/contact-info', 'component/contact-form'],
      function(about, mainEvent, eventsList, ctfsList, ctfsCurrent, archive, contactInfo, contactForm) {
        showOrHide(about);
        carousel('carousel-about');

        showOrHide(mainEvent);
        showOrHide(eventsList);
        showOrHide(ctfsList);
        showOrHide(ctfsCurrent);
        showOrHide(archive);
        showOrHide(contactInfo);
        showOrHide(contactForm);
      });
  });
});*/

require(['domReady'], function(domReady) {
  domReady(function () {
    if (window.location.href.includes("events")) {
      require(['component/main-event', 'component/events-list'], function(mainEvent, eventsList) {});
    } else if (window.location.href.includes("ctfs")) {
      require(['component/ctfs-list', 'component/ctfs-current'], function(ctfsList, ctfsCurrent) {});
    } else if (window.location.href.includes("archive")) {
      require(['component/archive'], function(archive) {});
    } else if (window.location.href.includes("contact")) {
      require(['component/contact-info', 'component/contact-form'], function(contactInfo, contactForm) {});
    } else {
      //handle cases for about - when url contains "about" or on default
      require(['component/about'], function(about) {
        carouselInit('carousel-about');
      })
    }
    /*require(['component/about', 'component/main-event', 'component/events-list', 'component/ctfs-list', 'component/ctfs-current', 'component/archive', 'component/contact-info', 'component/contact-form'],
      function(about, mainEvent, eventsList, ctfsList, ctfsCurrent, archive, contactInfo, contactForm) {
        showOrHide(about);
        carousel('carousel-about');

        showOrHide(mainEvent);
        showOrHide(eventsList);
        showOrHide(ctfsList);
        showOrHide(ctfsCurrent);
        showOrHide(archive);
        showOrHide(contactInfo);
        showOrHide(contactForm);
      });*/
  });
});

/*require(['master', 'component/about', 'component/main-event', 'component/events-list', 'component/ctfs-current', 'component/ctfs-list', 'component/archive', 'component/contact-info', 'component/contact-form'],
  function(master, about, mainEvent, eventsList, ctfsCurrent, ctfsList, archive, contactInfo, contactForm) {
    //console.log(master + ", "+  about + ", "+ eMain + ", " + eList + ", " + ctfsCurr + ", " + ctfsList + ", " + archive + ", " + contactInfo + ", " + contactForm);
    showOrHide(about);
    showOrHide(mainEvent);
    showOrHide(eventsList);
    showOrHide(ctfsCurrent);
    showOrHide(ctfsList);
    showOrHide(archive);
    showOrHide(contactInfo);
    showOrHide(contactForm);
});*/
