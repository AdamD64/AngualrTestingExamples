exports.config = {
    directConnect: true,
    chromeDriver: 'node_modules/chromedriver/lib/chromedriver/chromedriver',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'cucumber',

    specs: [
        './tests/e2e-tests/**/*.feature',
    ],

    baseUrl: 'http://localhost:8000/app/',

    cucumberOpts: {

    }
}
