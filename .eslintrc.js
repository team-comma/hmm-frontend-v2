module.exports = {
  root: true,

  env: {
    es6: true,
    browser: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },

  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['prettier', 'import', 'react', 'react-hooks', 'jsx-a11y'],

  rules: {
    'global-require': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-return-await': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    '@typescript-eslint/no-useless-constructor': 'error',

    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '{react*,react*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{next*,next*/**}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',

    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-useless-fragment': 'warn',
    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        node: {
          extensions: ['.ts', '.tsx', '.native.js'],
        },
      },
    },
  },
};
