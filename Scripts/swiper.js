var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
     // Optional parameters  
	slidesPerView: 1,
    direction: 'horizontal',
	spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
	// init: false,
	// If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
	breakpoints: {
	  620: {
		slidesPerView: 1,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 30,
	  },
	  1240: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	} 
    });