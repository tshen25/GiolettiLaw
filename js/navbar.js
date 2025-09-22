// navbar.js - Reusable Navigation Component
document.getElementById("navMenu").innerHTML =
'<section class="sticky top-0 z-50 navbar bg-gray-900 text-white shadow-md">' +
	'<nav class="w-full flex items-center justify-between py-4 px-4 md:px-6">' +
	
	'<!-- Left: Logo -->' +
	'<a href="/index.html" class="logo">' +
		'<img src="/assets/images/logo.png" alt="Law Firm Logo" class="h-4">' +
	'</a>' +

	'<!-- Desktop Nav Links -->' +
	'<ul class="hidden md:flex space-x-6">' +
		'<li><a href="/index.html" class="hover:text-gray-300">Home</a></li>' +
		'<li><a href="/index.html#insights" class="hover:text-gray-300">Blog</a></li>' +
		'<li><a href="/html/about.html" class="hover:text-gray-300">About</a></li>' +
		
		'<!-- Dropdown -->' +
		'<li class="relative group">' +
		'<a href="/index.html#services" class="hover:text-gray-300">Practice Areas</a>' +
		'<ul class="absolute left-0 top-full hidden bg-white text-black shadow-lg group-hover:block z-50">' +
			'<li><a href="/html/practices/practices_content/compliance.html" class="block px-4 py-2 hover:bg-gray-200">Compliance for Housing Providers</a></li>' +
			'<li><a href="/html/practices/practices_content/training.html" class="block px-4 py-2 hover:bg-gray-200">Fair Housing Training Courses</a></li>' +
		'</ul>' +
		'</li>' +

		'<li><a href="/html/contact.html" class="hover:text-gray-300">Contact</a></li>' +
	'</ul>' +

	'<!-- Mobile Burger Button -->' +
	'<button id="menu-btn" class="md:hidden focus:outline-none">' +
		'<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">' +
		'<path d="M4 6h16M4 12h16M4 18h16" />' +
		'</svg>' +
	'</button>' +
	'</nav>' +

	'<!-- Mobile Menu (hidden by default) -->' +
	'<div id="mobile-menu" class="hidden md:hidden bg-gray-800 text-white">' +
	'<ul class="flex flex-col space-y-2 p-4">' +
		'<li><a href="/index.html" class="hover:text-gray-300">Home</a></li>' +
		'<li><a href="/index.html#insights" class="hover:text-gray-300">Blog</a></li>' +
		'<li><a href="/html/about.html" class="hover:text-gray-300">About</a></li>' +
		'<li>' +
		'<details class="group">' +
			'<summary class="cursor-pointer hover:text-gray-300">Practice Areas</summary>' +
			'<ul class="ml-4 mt-2 space-y-2">' +
			'<li><a href="/html/practices/practices_content/compliance.html" class="block hover:text-gray-300">Compliance for Housing Providers</a></li>' +
			'<li><a href="/html/practices/practices_content/training.html" class="block hover:text-gray-300">Fair Housing Training Courses</a></li>' +
			'</ul>' +
		'</details>' +
		'</li>' +
		'<li><a href="/html/contact.html" class="hover:text-gray-300">Contact</a></li>' +
	'</ul>' +
	'</div>' +
'</div>';

// Initialize mobile menu functionality after navbar is loaded
document.addEventListener('DOMContentLoaded', function() {
	// Wait a bit for the navbar to be fully rendered
	setTimeout(function() {
		const menuBtn = document.getElementById('menu-btn');
		const mobileMenu = document.getElementById('mobile-menu');
		
		if (menuBtn && mobileMenu) {
			menuBtn.addEventListener('click', () => {
				mobileMenu.classList.toggle('hidden');
			});
		}
	}, 100);
});