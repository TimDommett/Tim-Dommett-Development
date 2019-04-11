
// Moving hero image
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });


  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (40 * lMouseX) / 40; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (30 * lMouseY) / 40;

});

moveBackground();

// top hero image mover

var lFollowXone = 0,
    lFollowYone = 0,
    xone = 0,
    yone = 0,
    frictionone = 1 / 30;

function moveBackgroundOne() {
  xone += (lFollowXone - xone) * frictionone;
  yone += (lFollowYone - yone) * frictionone;

  translate = 'translate(' + xone + 'px, ' + yone + 'px) scale(1.1)';

  $('.bg-one').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackgroundOne);
}

$(window).on('mousemove click', function(e) {

  var lMouseXone = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseYone = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowXone = (40 * lMouseXone) / 150; // 100 : 12 = lMouxeX : lFollow
  lFollowYone = (30 * lMouseYone) / 150;

});

moveBackgroundOne();




// home hero image layer two
var lFollowXtwo = 0,
    lFollowYtwo = 0,
    xtwo = 0,
    ytwo = 0,
    frictiontwo = 1 / 30;

function moveBackgroundTwo() {
  xtwo += (lFollowXtwo - xtwo) * frictiontwo;
  ytwo += (lFollowYtwo - ytwo) * frictiontwo;

  translate = 'translate(' + xtwo + 'px, ' + ytwo + 'px) scale(1.1)';

  $('.bg-two').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackgroundTwo);
}

$(window).on('mousemove click', function(e) {

  var lMouseXtwo = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseYtwo = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowXtwo = (40 * lMouseXtwo) / 120; // 100 : 12 = lMouxeX : lFollow
  lFollowYtwo = (30 * lMouseYtwo) / 120;

});

moveBackgroundTwo();



// home hero image layer three
var lFollowXthree = 0,
    lFollowYthree = 0,
    xthree = 0,
    ythree = 0,
    frictionthree = 1 / 30;

function moveBackgroundThree() {
  xthree += (lFollowXthree - xthree) * frictionthree;
  ythree += (lFollowYthree - ythree) * frictionthree;

  translate = 'translate(' + xthree + 'px, ' + ythree + 'px) scale(1.1)';

  $('.bg-three').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackgroundThree);
}

$(window).on('mousemove click', function(e) {

  var lMouseXthree = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseYthree = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowXthree = (40 * lMouseXthree) / 90; // 100 : 12 = lMouxeX : lFollow
  lFollowYthree = (30 * lMouseYthree) / 90;

});

moveBackgroundThree();

// home hero image layer three
// var lFollowXthree = 0,
//     lFollowYthree = 0,
//     xthree = 0,
//     ythree = 0,
//     frictionthree = 1 / 30;
//
// function moveBackgroundThree() {
//   xthree += (lFollowXthree - xthree) * frictionthree;
//   ythree += (lFollowYthree - ythree) * frictionthree;
//
//   translate = 'translate(' + xthree + 'px, ' + ythree + 'px) scale(1.1)';
//
//   $('.bg-three').css({
//     '-webit-transform': translate,
//     '-moz-transform': translate,
//     'transform': translate
//   });
//
//   window.requestAnimationFrame(moveBackgroundThree);
// }
//
// $(window).on('mousemove click', function(e) {
//
//   var lMouseXthree = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
//   var lMouseYthree = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
//   lFollowXthree = (20 * lMouseXthree) / 30; // 100 : 12 = lMouxeX : lFollow
//   lFollowYthree = (10 * lMouseYthree) / 80;
//
// });


// home hero image layer four
var lFollowXfour = 0,
    lFollowYfour = 0,
    xfour = 0,
    yfour = 0,
    frictionfour = 1 / 30;

function moveBackgroundFour() {
  xfour += (lFollowXfour - xfour) * frictionfour;
  yfour += (lFollowYfour - yfour) * frictionfour;

  translate = 'translate(' + xfour + 'px, ' + yfour + 'px) scale(1.1)';

  $('.bg-four').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackgroundFour);
}

$(window).on('mousemove click', function(e) {

  var lMouseXfour = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseYfour = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowXfour = (40 * lMouseXfour) / 60; // 100 : 12 = lMouxeX : lFollow
  lFollowYfour = (30 * lMouseYfour) / 60;

});
moveBackgroundFour();


// home hero image layer five
var lFollowXfive = 0,
    lFollowYfive = 0,
    xfive = 0,
    yfive = 0,
    frictionfive = 1 / 30;

function moveBackgroundFive() {
  xfive += (lFollowXfive - xfive) * frictionfive;
  yfive += (lFollowYfive - yfive) * frictionfive;

  translate = 'translate(' + xfive + 'px, ' + yfive + 'px) scale(1.1)';

  $('.bg-five').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackgroundFive);
}

$(window).on('mousemove click', function(e) {

  var lMouseXfive = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseYfive = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowXfive = (40 * lMouseXfive) / 30; // 100 : 12 = lMouxeX : lFollow
  lFollowYfive = (30 * lMouseYfive) / 30;

});
moveBackgroundFive();


// home hero image layer six
var lFollowXsix = 0,
    lFollowYsix = 0,
    xsix = 0,
    ysix = 0,
    frictionsix = 1 / 30;

function moveBackgroundSix() {
  xsix += (lFollowXsix - xsix) * frictionsix;
  ysix += (lFollowYsix - ysix) * frictionsix;

  translate = 'translate(' + xsix + 'px, ' + ysix + 'px) scale(1.1)';

  $('.bg-six').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackgroundSix);
}

$(window).on('mousemove click', function(e) {

  var lMouseXsix = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseYsix = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowXsix = (40 * lMouseXsix) / 1; // 100 : 12 = lMouxeX : lFollow
  lFollowYsix = (30 * lMouseYsix) / 1;

});
moveBackgroundSix();



// scrolling skills div
$(window).on('load', function(){
  // Please run it with window.onload, not with document.ready
  initSmoothScrolling('.block','smoothscroll');
});

function initSmoothScrolling(container,animation){
 /*
	* @param {String} container Class or ID of the animation container
	* @param {String} animation Name of the animation, e.g. smoothscroll
	*/
	var sliderWidth = 0;
	var animationWidth = 0;
	var sliderHeight = $('>div>div:first-of-type',container).outerHeight(false);

	$('>div>div', container).each(function(){
		animationWidth += $(this).outerWidth(false);
	});

	// detect number of visible slides
	var slidesVisible = $(container).width() / $('>div>div:first-of-type',container).outerWidth(false);
	slidesVisible = Math.ceil(slidesVisible);

  // count slides to determine animation speed
	var slidesNumber = $('>div>div', container).length;
	var speed = slidesNumber*5;

// append the tail
	$('>div>div',container).slice(0,slidesVisible).clone().appendTo($('>div',container));

	// Detect the slider width with appended tail
	$('>div>div', container).each(function(){
		sliderWidth += $(this).outerWidth(false);
	});

	// set slider dimensions
	$('>div',container).css({'width':sliderWidth,'height':sliderHeight});

// Insert styles to html
	$("<style type='text/css'>@keyframes "+animation+" { 0% { margin-left: 0px; } 100% { margin-left: -"+animationWidth+"px; } } "+$('>div>div:first-of-type',container).selector+" { -webkit-animation: "+animation+" "+speed+"s linear infinite; -moz-animation: "+animation+" "+speed+"s linear infinite; -ms-animation: "+animation+" "+speed+"s linear infinite; -o-animation: "+animation+" "+speed+"s linear infinite; animation: "+animation+" "+speed+"s linear infinite; }</style>").appendTo("head");

	// restart the animation (e.g. for safari & ie)
	var cl = $(container).attr("class");
	$(container).removeClass(cl).animate({'nothing':null}, 1, function () {
		$(this).addClass(cl);
	});
}

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-stop").offset().top
    }, 1700);
});
