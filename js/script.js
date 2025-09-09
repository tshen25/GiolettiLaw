// Carousel Script 
  
	const carousel = document.getElementById('carousel');
	const slides = carousel.children.length;
	let index = 0;
  
	const dots = document.querySelectorAll('.dot');
  
	function updateCarousel() {
	  carousel.style.transform = `translateX(-${index * 100}%)`;
	  dots.forEach((dot, i) => {
		dot.classList.toggle('bg-indigo-600', i === index);
		dot.classList.toggle('bg-gray-300', i !== index);
	  });
	}
  
	document.getElementById('next').addEventListener('click', () => {
	  index = (index + 1) % slides;
	  updateCarousel();
	});
  
	document.getElementById('prev').addEventListener('click', () => {
	  index = (index - 1 + slides) % slides;
	  updateCarousel();
	});
  
	//  Make dots clickable
	dots.forEach((dot, i) => {
	  dot.addEventListener('click', () => {
		index = i;         // set index to the clicked dot
		updateCarousel();  // update carousel
	  });
	});
  
	// Initialize
	updateCarousel();
  
  
        
	// Script for Mobile Toggle 
	
		const menuBtn = document.getElementById('menu-btn');
		const mobileMenu = document.getElementById('mobile-menu');
	
		menuBtn.addEventListener('click', () => {
		mobileMenu.classList.toggle('hidden');
		});