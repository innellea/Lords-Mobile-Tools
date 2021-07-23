module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ['auto'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        it: 'writable',
        process: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {},
    parser: 'babel-eslint',
    settings: {
        react: {
            version: 'detect',
        },
    },
};
