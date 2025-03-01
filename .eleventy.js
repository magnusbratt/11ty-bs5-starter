const htmlmin = require("html-minifier")

const isProduction = process.env.NODE_ENV === 'production'

module.exports = function(config) {
    config.dir = {
        input: './src',
        output: "./public"
    }

    config.setDataDeepMerge(true)

    config.setTemplateFormats([
        'njk',
        'md',
        'jpg',
        'png',
        'svg',
        // 'liquid',
        // 'pug',
        // 'ejs',
        // 'hbs',
        // 'mustache',
        // 'haml',
        // '11ty.js',
    ])

    config.addTransform("htmlmin", function(content, outputPath) {
        if (isProduction && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })

            return minified
        }

        return content
    })

    return config
}