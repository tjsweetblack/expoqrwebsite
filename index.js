// Show cards only after scrolling past logos, animate arrow, switch logo layout
document.addEventListener('DOMContentLoaded', function() {
	const logoColumn = document.getElementById('logoColumn');
	const scrollDown = document.getElementById('scrollDown');
	const contentSection = document.getElementById('contentSection');
	const logoSection = document.querySelector('.logo-section');
	let isScrolled = false;

	// Set initial state
	function setInitialState() {
		// Show logos in column
		logoColumn.classList.add('logo-column');
		logoColumn.classList.remove('logo-row');
		// Show scroll down arrow
		scrollDown.style.display = 'flex';
		// Hide cards
		contentSection.style.display = 'none';
		contentSection.style.opacity = '0';
		isScrolled = false;
	}

	function showContent() {
		// Switch logos to row
		logoColumn.classList.add('logo-row');
		logoColumn.classList.remove('logo-column');
		// Hide scroll down arrow
		scrollDown.style.display = 'none';
		// Show cards with animation
		contentSection.style.display = 'block';
		setTimeout(() => {
			contentSection.style.opacity = '1';
		}, 100);
		isScrolled = true;
	}

	function hideContent() {
		// Switch logos back to column
		logoColumn.classList.remove('logo-row');
		logoColumn.classList.add('logo-column');
		// Show scroll down arrow
		scrollDown.style.display = 'flex';
		// Hide cards
		contentSection.style.opacity = '0';
		setTimeout(() => {
			contentSection.style.display = 'none';
		}, 300);
		isScrolled = false;
	}

	// Scroll handler
	function handleScroll() {
		const scrollTrigger = window.innerHeight * 0.3; // Trigger after 30% of viewport height
		
		if (window.scrollY > scrollTrigger && !isScrolled) {
			showContent();
		} else if (window.scrollY <= scrollTrigger && isScrolled) {
			hideContent();
		}
	}

	// Add scroll listener
	window.addEventListener('scroll', handleScroll);

	// Animate arrow
	function animateArrow() {
		if (scrollDown && scrollDown.querySelector('.arrow')) {
			scrollDown.querySelector('.arrow').animate([
				{ transform: 'translateY(0)' },
				{ transform: 'translateY(10px)' },
				{ transform: 'translateY(0)' }
			], {
				duration: 1500,
				iterations: Infinity,
				easing: 'ease-in-out'
			});
		}
	}

	// Initialize everything
	setInitialState();
	animateArrow();
});
