module.exports = {
<<<<<<< Updated upstream
    globDirectory: 'build/',
    globPatterns: ['**/*.{html,json,js,css}'],
    swDest: 'build/sw.js',
=======
    globDirectory: 'public/',
    globPatterns: ['**/*.{png,ico,html,json,txt,css,}'],
    globIgnores: ['main.js'],
    ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
>>>>>>> Stashed changes
    cleanupOutdatedCaches: true,
    // Define runtime caching rules.
};
