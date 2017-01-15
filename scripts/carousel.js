var activeIndices = {};
var interval;

function carouselInit(id) {
  console.log("heyo");
  //activeIndices[id] = -1;
  /*setInterval(function() {

    for (var i = 0; i < children.length; i++) {
      if ($(children[i]).hasClass("active")) {
        console.log("hello")
        $(children[i]).removeClass("active");
        if (i >= children.length - 1) {
          $(children[0]).addClass("active");
          console.log("hey");
        } else {
          $(children[i + 1]).addClass("active");
          console.log("hi");
        }
      }
    }
  }, 2000);*/
  interval = setInterval(carousel(id), 2000);
}

function carouselStop() {
  clearInterval(interval);
}

function carousel(id) {
   /*var carousel = $("#" + id);
   var children = carousel.children();

   console.log("interval function began " + carousel.prop('outerHTML'));
   if (typeof activeIndices[id] != "undefined") {
     //console.log("again! id: " +id+ " child: " +$(children).prop('outerHTML'));
     //$(children).each(function() { console.log($(this).html()) });
     //children = children.toArray();
     var index = activeIndices.id;
     console.log("child: " +$(children).prop('outerHTML'));
     console.log("child: " +$(children)[index]);
     if ($(children).get(index).hasClass("active")) {
       console.log("hello")
       $(children).get(index).removeClass("active");
       if (index >= children.length - 1) {
         $(children).get(0).addClass("active");
         activeIndices.id = 0;
         console.log("hey");
       } else {
         $(children).get(index + 1).addClass("active");
         activeIndices.id = index + 1;
         console.log("hi");
       }
     }
   } else {
     activeIndices[id] = 0;
   }*/
}
