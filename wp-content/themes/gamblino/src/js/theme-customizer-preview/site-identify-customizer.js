import stripHtmlTags from './helpers/strip-tags'

wp.customize('blogname', (value) => {
    value.bind((to) => {
        document.getElementById('header-blogname').textContent = to;
    });
});