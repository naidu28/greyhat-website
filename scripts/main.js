requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/Users/sainaidu/Documents/projects/greyhat-website/scripts',
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

require(['master', 'component/main-event', 'component/events-list'], function(master, eMain, eList) {
  console.log(master + ", " + eMain + ", " + eList)
  master(eMain, eList);
});
