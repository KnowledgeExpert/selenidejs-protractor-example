export const config = {
    SELENIUM_PROMISE_MANAGER: false,
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 2000000,
        isVerbose: true
    },
    specs: ['./test/**/*.spec.js']
};