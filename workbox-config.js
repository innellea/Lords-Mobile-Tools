module.exports = {
    globDirectory: 'public/',
    globPatterns: ['**/*.{png,ico,html,json,txt,js,css}'],
    clientsClaim: true,
    skipWaiting: true,
    dontCacheBustURLsMatching: new RegExp('.+.[a-f0-9]{20}..+|index.html'),
    cleanupOutdatedCaches: true,
    exclude: [new RegExp('index.html')],
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
    swDest: 'public/sw.js',
};
