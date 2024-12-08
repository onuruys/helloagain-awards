module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native',
    'prettier',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    // 'plugin:react/recommended',
    '@react-native',
    'eslint-plugin-no-inline-styles',
    'prettier',
    'unused-imports',
  ],
  rules: {
    'no-use-before-define': ['error', { variables: false, functions: false }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
    'max-len': ['warn', { code: 85, ignoreComments: true }],
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': 'warn',
    'no-duplicate-imports': ['warn', { includeExports: true }],
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
    'prefer-const': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-inline-styles/no-inline-styles': 2,
    semi: [2, 'always'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/display-name': 'off',
    eqeqeq: 'off',
    indent: 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/quotes': 'off',
        quotes: ['warn', 'double', { avoidEscape: true }],
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { ignoreArrowShorthand: true },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-definitions': 'off',
      },
    },
  ],
};
