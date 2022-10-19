// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            OperationDefinition: {
              style: 'PascalCase',
              forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
              forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
            },
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  processor: '@graphql-eslint/graphql',
  ignorePatterns: ['node_modules', 'public', '.cache', '*config.js'],
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],

  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off', // ESlint doesn't understand relative paths
    'react/jsx-sort-props': ['error', { reservedFirst: true }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-param-reassign': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
