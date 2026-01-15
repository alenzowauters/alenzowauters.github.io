/*
Author       : Siodexs
Template Name: ASO - Creative Personal Portfolio HTML5 Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
		
		/* START MENU-JS */	
			$('#mobile-menu').onePageNav({
				currentClass: 'current',
				changeHash: true,
				scrollSpeed: 3000,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing',
				begin: function() {
					//I get fired when the animation is starting
				},
				end: function() {
					//I get fired when the animation is ending
				},
				scrollChange: function(jQuerycurrentListItem) {
					//I get fired when you enter a section and I pass the list item of the section
				}
			});	
			
			$('#mobile-menu a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 100);
				e.preventDefault();
			});					
		/* END MENU-JS */
		
		/* START MOBILE-MENU  */
			$('#mobile-menu').slicknav({
				prependTo:".mobile-nav",
			});
		/* START MOBILE-MENU  */
		 
		/*---------------------
		Sticky
		--------------------- */
			$(window).on("scroll", function() {
				var scroll = $(window).scrollTop();
			   if (scroll >= 10) {
				   $('.theme-sticky-header').addClass('theme-sticky-active');
			   } else {
				   $('.theme-sticky-header').removeClass('theme-sticky-active');
			   }
		   });
	   
		/* START JQUERY LIGHTBOX*/
			jQuery('.lightbox').venobox({
				numeratio: true,
				infinigall: true
			});	
		/* END JQUERY LIGHTBOX*/	
		
		/*START PORTFOLIO JS*/
			$('.portfolio_item').mixItUp({
			
			});		
		/*END PORTFOLIO JS*/

		/* START LIGHTBOX */
		
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			});
		
		
		
	});	
		
		
	
		/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
		
		   /* START TESTIMONIAL JS */
			$(".testmonial_slider_area").owlCarousel({
				autoPlay: true,
				slideSpeed:1000,
				items : 1,
				loop: true,
				nav:false,
				margin: 30,
				dots: true,
				responsive:{
					320:{
						items:1
					},
					767:{
						items:1
					},
					1000:{
						items:1
					}
				}
				
			});
		/* END TESTIMONIAL JS */
		
		// Wow
			new WOW().init();
})(jQuery);
