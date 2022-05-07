document.addEventListener('DOMContentLoaded', () => {
	// prettier-ignore
	const exitHamburgerMenuBtn = document.getElementById('navbar-overlay-exit-button') as HTMLButtonElement;
	const hamburgerMenuBtn = document.getElementById('hamburger-phone-menu') as HTMLButtonElement;
	const navbarPhoneMenu = document.getElementById('navbar-phone-menu') as HTMLElement;
	const overlay = document.getElementById('navbar-overlay') as HTMLDivElement;
	const body = document.getElementById('body') as HTMLBodyElement;

	if (!hamburgerMenuBtn) return;
	if (!exitHamburgerMenuBtn) return;

	hamburgerMenuBtn.addEventListener('click', () => {
		overlay.dataset.state = 'opened';
		hamburgerMenuBtn.ariaPressed = 'true';
		navbarPhoneMenu.dataset.state = 'opened';
		hamburgerMenuBtn.style.display = 'none';

		body.style.overflow = 'hidden';
	});

	exitHamburgerMenuBtn.addEventListener('click', () => {
		overlay.dataset.state = 'closed';
		exitHamburgerMenuBtn.ariaPressed = 'false';
		navbarPhoneMenu.dataset.state = 'closed';
		hamburgerMenuBtn.style.display = 'block';
		body.style.overflow = 'auto';
	});
});
