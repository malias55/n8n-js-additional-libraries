module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:n8n-nodes-base/recommended',
    ],
    ignorePatterns: ['dist/**/*', '*.js'],
    rules: {
        'n8n-nodes-base/node-param-description-missing-regex': 'off',
        'n8n-nodes-base/node-param-description-wrong-for-dynamic-options': 'off',
        'n8n-nodes-base/node-param-description-missing-for-ignore-ssl-issues': 'off',
    },
}; 