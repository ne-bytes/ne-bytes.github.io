const filters = require('./src/_11ty/filters');

module.exports = function(eleventyConfig) {

    // Copy top level individual assets
    eleventyConfig.addPassthroughCopy('./src/site.webmanifest');
    eleventyConfig.addPassthroughCopy( { './src/assets/img/favicon.ico': '/favicon.ico' });

    // Copy asset folders 
    eleventyConfig.addPassthroughCopy( { './src/assets/css/': 'css' });
    eleventyConfig.addWatchTarget('./src/assets/css/');
    eleventyConfig.addPassthroughCopy( { './src/assets/js/': 'js' });
    eleventyConfig.addPassthroughCopy( { './src/assets/img/': 'img' });

    // Filters
    Object.keys(filters).forEach(filterName => {
        eleventyConfig.addFilter(filterName, filters[filterName]);
    });

    return {
        dir: {
            input: 'src',
            output: 'docs'
        },
        templateFormats: [ 'md', 'njk', 'html' ],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    };
}