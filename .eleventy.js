module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/site.webmanifest');
    eleventyConfig.addPassthroughCopy( { './src/assets/img/favicon.ico': '/favicon.ico' });

    eleventyConfig.addPassthroughCopy( { './src/assets/css/': 'css' });
    eleventyConfig.addWatchTarget('./src/assets/css/');
    eleventyConfig.addPassthroughCopy( { './src/assets/js/': 'js' });
    eleventyConfig.addPassthroughCopy( { './src/assets/img/': 'img' });

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