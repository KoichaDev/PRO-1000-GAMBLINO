import stripHtmlTags from './helpers/strip-tags'

wp.customize('gamblino_footer_site_info', (value) => {
	value.bind((to) => {
		document.querySelector('.text-content').textContent = stripHtmlTags(to, '<a>');
	});
});