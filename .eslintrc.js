module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    ignorePatterns: [
        'node_modules/',
        // TODO: uncomment later and fix errors
        'scripts/translations/',
        'hostlists-builder/',
    ],
    rules: {
        indent: ['error', 4],
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-len': ['error', {
            code: 120,
            comments: 120,
            tabWidth: 4,
            ignoreUrls: false,
            ignoreTrailingComments: false,
            ignoreComments: false,
        }],
    },
};
