const ALLOW = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.test.json'],
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    // avoid conflicting with prettier for switch statement
    indent: [ERROR, 2, { SwitchCase: 1 }],
    'lines-between-class-members': ALLOW,
    'no-console': [WARN, { allow: ['info', 'warn', 'error'] }],
    'no-undef': ALLOW,
    'arrow-body-style': ALLOW,

    // eslint-plugin-import
    'import/extensions': [
      2,
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        json: 'never',
      },
    ],
    'import/no-unresolved': [ALLOW],
    'import/no-extraneous-dependencies': [WARN, { devDependencies: true }],
    'import/prefer-default-export': ALLOW,

    // @typescript-eslint
    'no-use-before-define': ALLOW,
    '@typescript-eslint/no-use-before-define': ERROR,
    'no-unused-vars': ALLOW,
    '@typescript-eslint/no-unused-vars': ERROR,
    semi: ALLOW,
    '@typescript-eslint/semi': [ERROR],
    '@typescript-eslint/member-delimiter-style': ERROR,
    '@typescript-eslint/no-unsafe-return': ALLOW,
    '@typescript-eslint/no-unsafe-assignment': ALLOW,
    '@typescript-eslint/no-unsafe-call': ALLOW,
  },
};
