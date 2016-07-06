/**
 * Created by Julius Hernandez on 11/21/2015.
 */

//this is for the 3 images animating out from behind each other
//via adding CSS classes that have transitions
jQuery('.banner-image-block').imagesLoaded(function(){
    jQuery('.banner-img').addClass('banner-img-animate');
});


//this section will add css class to transition in the aside menu
var $asideNav = jQuery('.aside-sub-nav');
var openClass = 'aside-sub-nav-open';

jQuery('.aside-trigger').on('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    if(!$asideNav.hasClass(openClass)){
        $asideNav.toggleClass(openClass);
    }
});

jQuery('nav').on('click', function(e){
    e.stopPropagation();
});

jQuery(window).on('click', function(){
    if($asideNav.hasClass(openClass)){
        $asideNav.removeClass(openClass);
    }
});
//end of the "transition in the aside menu"

