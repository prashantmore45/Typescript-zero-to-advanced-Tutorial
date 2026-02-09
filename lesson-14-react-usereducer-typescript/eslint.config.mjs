// eslint config
import { defineConfig } from 'eslint';

export default defineConfig({
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    root: true,
    rules: {},
});
