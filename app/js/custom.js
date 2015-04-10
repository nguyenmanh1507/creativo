jQuery(document).ready(function($) {

	// WOW init
	wow = new WOW({
		mobile: false
	});
	wow.init();
	
	// init Isotope
	var $container = $('.work-list').isotope({
		//options
	});
	// filter item on click
	var worksFilter = $('.works-filter');
	worksFilter.on('click', 'a', function(e){
		var $this = $(this);
		e.preventDefault();
		worksFilter.find('dd').removeClass('active');
		$this.parent('dd').addClass('active');
		var filterValue = $this.data('filter');
		$container.isotope({ filter: filterValue });
	});

	// Owl carousel
	$("#owl-demo").owlCarousel({
 
		autoPlay: 3000, //Set AutoPlay to 3 seconds
			 
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
		 
	});

	// Counter Up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


});