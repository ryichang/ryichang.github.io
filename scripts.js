// scripts.js
console.log("sanity check!");

//Menu jQuery
$(".menu").click(function(){
  $(this).toggleClass("open");
});

$(document).ready(function(){

$(window).load(function() {    

    var theWindow        = $(window),
        $bg              = $("#bg"),
        aspectRatio      = $bg.width() / $bg.height();
                                
    function resizeBg() {
        
        if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
            $bg
                .removeClass()
                .addClass('bgheight');
        } else {
            $bg
                .removeClass()
                .addClass('bgwidth');
        }
                    
    }
                                
    theWindow.resize(resizeBg).trigger("resize");

});

	particlesJS();
//Prevent input with no value entered

// var inputMessage = $('#inputMessage');
// inputMessage.submit(function(e){
// 	e.preventDefault();
// });
var container = document.querySelector('#masonry');
  var sasonry = new Masonry(container, {
    columnWidth: 50,
    itemSelector: '.item'
  });


$.ajax({
    type: "GET",
    dataType: "jsonp",
    url: "https://api.instagram.com/v1/users/2191727/media/recent?access_token=2191727.73fb6de.b45bbbba7d54487dbf936f996b1203fb&count=12",
    success: function (json) {
        $.each(json.data, function () {
            var thisdata = this;
            $('.instagram-gallery').append("<a href='" + this.link + "' target='_blank'><div class='instagram-img'><div class='imagebox'><span class='likes'>" + this.likes.count + "</span><img src='" + this.images.thumbnail.url + "'/></div></div></a>");
        });
        var $container = $('.instagram-gallery');
        // initialize
        $container.masonry({
            itemSelector: '.instagram-img'
        });
    }
});
var $card = $('.card');
var lastCard = $(".card-list .card").length - 1;



//nav on scroll 
// $(function () { 
//     var down = false;
//     var menuOn = false;
//     $(window).on('scroll', function() {
//         var scrollTop = $(this).scrollTop();    
//         if ( scrollTop > 0 && down === false) {
//             $('#header').animate({"top":  -200}, 300 );
//             down = true;
//         } 
//         if ( scrollTop < 10 && down === true) {
//             $('#header').animate({"top": 0}, 300 );
//             down = false;
//         }
//     });            
// });




//Overlay divs
(function () {
    var bHeight, bWidth, block, bname, closeBtn, closeContent, content, expand, openContent, updateValues, wHeight, wWidth, xVal, yVal;
    block = $('.blocks__block');
    bname = $('.blocks__name');
    content = $('.blocks-content__content');
    closeBtn = $('.blocks__content-close');
    wHeight = $(window).outerHeight();
    wWidth = $(window).outerWidth();
    bHeight = block.outerHeight();
    bWidth = block.outerWidth();
    xVal = Math.round(wWidth / bWidth) + 0.03;
    yVal = wHeight / bHeight + 0.03;
    expand = function () {
        var aBlock, num;
        num = $(this).index();
        aBlock = block.eq(num);
        if (!aBlock.hasClass('active')) {
            bname.css('opacity', '0');
            aBlock.css({
                'transform': 'scale(' + xVal + ',' + yVal + ')',
                '-webkit-transform': 'scale(' + xVal + ',' + yVal + ')'
            });
            aBlock.addClass('active');
            openContent(num);
        }
    };
    openContent = function (num) {
        var aContent;
        content.css({
            'transition': 'all 0.3s 0.4s ease-out',
            '-webkit-transition': 'all 0.3s 0.4s ease-out'
        });
        aContent = content.eq(num);
        aContent.addClass('active');
    };
    closeContent = function () {
        bname.css('opacity', '1');
        content.css({
            'transition': 'all 0.1s 0 ease-out',
            '-webkit-transition': 'all 0.1s 0 ease-out'
        });
        block.css({
            'transform': 'scale(1)',
            '-webkit-transform': 'scale(1)'
        });
        block.removeClass('active');
        content.removeClass('active');
    };
    updateValues = function () {
        var yVal;
        var xVal;
        var bWidth;
        var bHeight;
        var wWidth;
        var wHeight;
        var aBlock;
        if (block.hasClass('active')) {
            aBlock = $('.blocks__block.active');
            wHeight = $(window).height();
            wWidth = $(window).width();
            bHeight = block.height();
            bWidth = block.width();
            xVal = Math.round(wWidth / bWidth) + 0.03;
            yVal = wHeight / bHeight + 0.03;
            aBlock.css({
                'transform': 'scale(' + xVal + ',' + yVal + ')',
                '-webkit-transform': 'scale(' + xVal + ',' + yVal + ')'
            });
        }
    };
    $(window).on('resize', updateValues);
    bname.on('click', expand);
    closeBtn.on('click', closeContent);
}.call(this));

});


