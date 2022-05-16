document.addEventListener('DOMContentLoaded', () => {
	const mainMenu = document.querySelectorAll<HTMLLIElement>('#menu-item-active-1');
	const subMenuLevel3 = document.querySelectorAll<HTMLLIElement>('#menu-item-active-3');
	const goBackMenuLevelOne = document.querySelectorAll<HTMLButtonElement>('#btn-menu-back');
	const goBackMenuLevelTwo = document.querySelectorAll<HTMLButtonElement>('#btn-menu-2-back');
	const goBackMenuLevelThree = document.querySelectorAll<HTMLButtonElement>('#btn-menu-3-back');

	if (!mainMenu) return;
	if (!subMenuLevel3) return;

	for (const subMenus of mainMenu) {
		subMenus.addEventListener('click', (e) => {
			const target = e.target as HTMLAnchorElement;
			const subMenu = target.nextElementSibling as HTMLUListElement;

			if (!subMenu) return;
			// The sub menu will be visible based on the button has been clicked for the sub menu level 2
			subMenu.dataset.state = 'visible';

			for (const button of goBackMenuLevelOne) {
				button.addEventListener('click', () => {
					subMenu.dataset.state = 'hidden';
				});
			}

			for (const button of goBackMenuLevelTwo) {
				button.addEventListener('click', () => {
					subMenu.dataset.state = 'hidden';
				});
			}

			for (const button of goBackMenuLevelThree) {
				button.addEventListener('click', () => {
					const target = subMenu.querySelector('#menu-item-active-3') as HTMLUListElement;
					target.dataset.state = 'hidden';
				});
			}
		});
	}
});
