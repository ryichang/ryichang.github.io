

//Card click functionality

(function() {
  var cards = document.querySelectorAll(".card.effect__click");
  for ( var i  = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    clickListener( card );
  }

  function clickListener(card) {
    card.addEventListener( "click", function() {
      var c = this.classList;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
    });
  }
})();

//Scroll to top 


document.body.addEventListener('click', function(event) {
 var elem = event.target;
	if(elem.classList.contains('js-scroll')) {
		var elemHref = elem.getAttribute('href');
		var elemDestination = document.querySelector(elemHref);
		var bodyRect = document.body.getBoundingClientRect();
		var elemRect = elemDestination.getBoundingClientRect();
		var topCoordinate = elemRect.top - bodyRect.top;
		//find top coordinate of the current window
		var winTop = window.pageYOffset || document.documentElement.scrollTop;
		console.log('wintop is ', winTop);
		var limit = topCoordinate;
		var timerId = setInterval(function() {
			if(winTop < limit) {
				window.scrollTo(0, winTop += 5);		
			} else {
				window.scrollTo(0, limit);
				clearInterval(timerId);
			}
		}, 10);
	}
});

// Clock
var clock=document.getElementsByTagName('time')[0];
var hLabels=['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
var mLabels=['','five','ten','quarter','twenty','twenty-five','half'];
function itsaclock(){
    var d = new Date(), h = d.getHours(), m=d.getMinutes();
    var hour = ' '+(m>32 ? hLabels[(h%12) + 1] : hLabels[h%12]) + (m%58<3? ' o\'clock':'');
    var min  = m===0?'':' '+(m<33 ? mLabels[Math.round(m/5)] : mLabels[6-Math.round((m-30)/5)]);
    var approx = m%5===0?'':m%5>2?' nearly':' just after' ; 
    var topast = m%58<3 ? '' : m%60>32? ' to':' past';
    clock.innerHTML='&#10077'+'It\'s' + approx + min + topast + hour +'&#10078';
    setTimeout(itsaclock, 1000);
}
setTimeout(itsaclock, 2000);

// Date
var d = new Date();
document.getElementById("day").innerHTML = d.getDate();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
document.getElementById("month").innerHTML = monthNames[d.getMonth()];

close = document.getElementById("close");
 close.addEventListener('click', function() {
   note = document.getElementById("note");
   note.style.display = 'none';
 }, false);

// Random
//  (function ($) {

//   new WOW().init();

//   jQuery(window).load(function() { 
//     jQuery("#preloader").delay(100).fadeOut("slow");
//     jQuery("#load").delay(100).fadeOut("slow");
//   });


//   //jQuery to collapse the navbar on scroll
//   $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//       $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//       $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
//   });

//   //jQuery for page scrolling feature - requires jQuery Easing plugin
//   $(function() {
//     $('.navbar-nav li a').bind('click', function(event) {
//       var $anchor = $(this);
//       $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top
//       }, 1500, 'easeInOutExpo');
//       event.preventDefault();
//     });
//     $('.page-scroll a').bind('click', function(event) {
//       var $anchor = $(this);
//       $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top
//       }, 1500, 'easeInOutExpo');
//       event.preventDefault();
//     });
//   });

// })(jQuery);

