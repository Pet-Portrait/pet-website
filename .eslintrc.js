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
  ignorePatterns: ['node_modules', 'public', '.cache', '*config.js', 'jest-preprocess.js'],
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],

  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components|hooks|images|pages|types|utils)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
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
