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

	// Animate progress bar
	// $('.meter').click(function(){

	// 	var end = $(this).data('end');
	// 	console.log(end);
	// 	$(this).animate({
	// 		width: end + '%'
	// 	}, 'fast');

	// });

	// Counter Up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


});