document.addEventListener('DOMContentLoaded', () => {
	// prettier-ignore
	const exitHamburgerMenuBtn = document.getElementById('navbar-overlay-exit-button') as HTMLButtonElement;
	const hamburgerMenuBtn = document.getElementById('hamburger-phone-menu') as HTMLButtonElement;
	const navbarPhoneMenu = document.getElementById('navbar-phone-menu') as HTMLElement;
	const overlay = document.getElementById('navbar-overlay') as HTMLDivElement;
	const body = document.getElementById('body') as HTMLBodyElement;

	if (!hamburgerMenuBtn) return;
	if (!exitHamburgerMenuBtn) return;

	// use observation to check if overlay data attribute data-state="opened" has been changed only
	// when the overlay is opened
	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			const target = mutation.target as HTMLDivElement;

			if (mutation.attributeName === 'data-state') {
				if (target.getAttribute('data-state') === 'opened') {
					// When opening the Hamburger Menu, then we want to focus directly on the Hamburge Exit Menu button right awaay
					exitHamburgerMenuBtn.focus();

					// When entering the escape key of the event lsitener, then we want to close the hamburger menu
					exitHamburgerMenuBtn.addEventListener('keydown', (e) => {
						if (e.key === 'Escape') {
							overlay.dataset.state = 'closed';
							exitHamburgerMenuBtn.ariaPressed = 'false';
							navbarPhoneMenu.dataset.state = 'closed';
							hamburgerMenuBtn.style.display = 'block';
							body.style.overflow = 'auto';
						}
					});
				}
			}
		});
	});

	observer.observe(overlay, { attributes: true });

	// Event listener when hamburger menu clicked, and then it will open the menu bar
	hamburgerMenuBtn.addEventListener('click', () => {
		overlay.dataset.state = 'opened';
		hamburgerMenuBtn.ariaPressed = 'true';
		navbarPhoneMenu.dataset.state = 'opened';
		hamburgerMenuBtn.style.display = 'none';

		body.style.overflow = 'hidden';
	});

	// event listener when closing the hambuger menu based on click handler. It will exit the menu bar
	exitHamburgerMenuBtn.addEventListener('click', () => {
		overlay.dataset.state = 'closed';
		exitHamburgerMenuBtn.ariaPressed = 'false';
		navbarPhoneMenu.dataset.state = 'closed';
		hamburgerMenuBtn.style.display = 'block';
		body.style.overflow = 'auto';
	});
});
