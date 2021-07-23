module.exports = {
    globDirectory: 'public/',
    globPatterns: ['**/*.{png,ico,html,json,txt,js,css}'],
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
    cleanupOutdatedCaches: true,
    swDest: 'public/sw.js',
};
