module.exports = {
    globDirectory: 'src/',
    globPatterns: ['**/*.{png,ico,html,json,txt,js,css,jsx,svg,jpg}'],
    skipWaiting: true,
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
    swDest: 'src/sw.js',
};
