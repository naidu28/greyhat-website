define([], function() {
  function render() {
    var widget = "<div id='about' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";
    //var titlePara = "<p class='title'>This is my title</p>";

    /*var slider = "<div class='slider' data-slick='{\'slidesToShow\': 3, \'slidesToScroll\': 3}'></div>"
    var imgA = "<img src='images/csaw.jpg'></img>"
    var imgB = "<img src='images/ctfmeeting.jpg'></img>"
    var imgC = "<img src='images/greyh@tctf2016.jpg'></img>"

    slider = $(slider)
      .append(imgA)
      .append(imgB)
      .append(imgC);*/

    var slider = '<div id="carousel-about" class="carousel slide" data-ride="carousel">';

    var indicatorWrapper = '<ol class="carousel-indicators"></ol>';
    var indA = '<li data-target="#carouselAboutIndicators" data-slide-to="0" class="active"></li>';
    var indB = '<li data-target="#carouselAboutIndicators" data-slide-to="1"></li>';
    var indC = '<li data-target="#carouselAboutIndicators" data-slide-to="2"></li>';

    indicatorWrapper = $(indicatorWrapper)
      .append(indA)
      .append(indB)
      .append(indC);

    var carousel = '<div class="carousel-inner" role="listbox"></div>';
    var itemA = '<div class="carousel-item active"><img class="d-block img-fluid" src="images/csaw.jpg" alt="First slide"></div>';
    var itemB = '<div class="carousel-item"><img class="d-block img-fluid" src="images/ctfmeeting.jpg" alt="Second slide"></div>';
    var itemC = '<div class="carousel-item"><img class="d-block img-fluid" src="images/greyh@tctf2016.jpg" alt="Third slide"></div>';

    carousel = $(carousel)
      .append(itemA)
      .append(itemB)
      .append(itemC);

    slider = $(slider)
      .append(indicatorWrapper)
      .append(carousel);

    //custom carousel code
    /*var divA = "<div class='carousel-object active'></div>";
    var divB = "<div class='carousel-object'></div>";
    var divC = "<div class='carousel-object'></div>";

    var imgA = "<img src='images/csaw.jpg'></img>";
    var imgB = "<img src='images/ctfmeeting.jpg'></img>";
    var imgC = "<img src='images/greyh@tctf2016.jpg'></img>";

    divA = $(divA)
      .append(imgA);

    divB = $(divB)
      .append(imgB);

    divC = $(divC)
      .append(imgC);

    var carousel = "<div id='carousel-about' class='carousel'></div>";

    carousel = $(carousel)
      .append(divA)
      .append(divB)
      .append(divC);*/

    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content)
      //.append(carousel);
      .append(slider);

    /*$(function(){
      $('#carousel-about').carousel();
    });*/

    $('#appendable-root')
      .append(widget);

    return widget;
  }

  return render();
});

function about() {
  function render() {
    var widget = "<div id='about' class='column'></div>";
    var header = "<div class='component-header'></div>";
    var divider = "<div class='component-divider'></div>";
    var content = "<div class='component-content'></div>";
    //var titlePara = "<p class='title'>This is my title</p>";

    /*var slider = "<div class='slider' data-slick='{\'slidesToShow\': 3, \'slidesToScroll\': 3}'></div>"
    var imgA = "<img src='images/csaw.jpg'></img>"
    var imgB = "<img src='images/ctfmeeting.jpg'></img>"
    var imgC = "<img src='images/greyh@tctf2016.jpg'></img>"

    slider = $(slider)
      .append(imgA)
      .append(imgB)
      .append(imgC);*/

    var slider = '<div id="carousel-about" data-ride="carousel">';

    /*var indicatorWrapper = '<ol class="carousel-indicators"></ol>';
    var indA = '<li data-target="#carouselAboutIndicators" data-slide-to="0" class="active"></li>';
    var indB = '<li data-target="#carouselAboutIndicators" data-slide-to="1"></li>';
    var indC = '<li data-target="#carouselAboutIndicators" data-slide-to="2"></li>';

    indicatorWrapper = $(indicatorWrapper)
      .append(indA)
      .append(indB)
      .append(indC);*/

    var carouselInner = '<div class="carousel-inner" role="listbox"></div>';
    var itemA = '<div class="item active"><img class="d-block img-fluid" src="images/csaw.jpg" alt="First slide"></div>';
    var itemB = '<div class="item"><img class="d-block img-fluid" src="images/ctfmeeting.jpg" alt="Second slide"></div>';
    var itemC = '<div class="item"><img class="d-block img-fluid" src="images/greyh@tctf2016.jpg" alt="Third slide"></div>';

    carouselInner = $(carouselInner)
      .append(itemA)
      .append(itemB)
      .append(itemC);

    slider = $(slider)
      //.append(indicatorWrapper)
      .append(carouselInner);

    /*Text code*/
    var title = '<h4 class="content-heading">Who We Are</h4>';
    title = $(title);

    var blurb = '<p class="blurb">&emsp;&emsp;We are students and alumni at the Georgia Institute of Technology who share a passion for all things related to information security. We compete in CTF competitions, attend security conventions, and hold weekly practice sessions for interested members. You can find us at the College of Computing in room 17 every Thursday between 6:30 and 8pm. We welcome students of all levels of expertise and from all backgrounds. If you would like to know more about us or would like to get involved, please contact us using the links below.</p>';
    blurb = $(blurb);
                            /**<div class="content">
                                <p class="flow-text">
                                    We are students and alumni at the <a class="external-link" href="http://www.gatech.edu/" target="_blank">Georgia Institute of Technology</a> who share a passion for all things related to information security. We compete in CTF competitions, attend security conventions, and hold weekly practice sessions for interested members.<br /><br />

                                    You can find us at the College of Computing in room 17 every Thursday between 6:30 and 8pm.<br /><br />

                                    We welcome students of all levels of expertise and from all backgrounds. If you would like to know more about us or would like to get involved, please contact us using the links below.
                                </p>
                            </div>*/

    //custom carousel code
    /*var divA = "<div class='carousel-object active'></div>";
    var divB = "<div class='carousel-object'></div>";
    var divC = "<div class='carousel-object'></div>";

    var imgA = "<img src='images/csaw.jpg'></img>";
    var imgB = "<img src='images/ctfmeeting.jpg'></img>";
    var imgC = "<img src='images/greyh@tctf2016.jpg'></img>";

    divA = $(divA)
      .append(imgA);

    divB = $(divB)
      .append(imgB);

    divC = $(divC)
      .append(imgC);

    var carousel = "<div id='carousel-about' class='carousel'></div>";

    carousel = $(carousel)
      .append(divA)
      .append(divB)
      .append(divC);*/

    header = $(header)
      .append(title);

    content = $(content)
      .append(slider)
      .append(blurb);

    widget = $(widget)
      .append(header)
      .append(divider)
      .append(content);
      //.append(carousel);

    /*$(function(){
      $('#carousel-about').carousel();
    });*/

    widget.hide();

    $('#appendable-root')
      .append(widget);

    widget.fadeIn(400);
    //carouselInit('carousel-about');
    $('#carousel-about').addClass("carousel slide");

    slider.carousel({
      interval: 3000
    })

    return widget;
  }

  return render();
}
