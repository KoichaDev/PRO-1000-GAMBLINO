wp.customize('gamblino_footer_site_info', (value) => {
	value.bind((to) => {
		console.log(to);
		document.querySelector('.text-content').textContent = to;
	});
});