module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'standard-jsx',
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    /* React Best Practice */
    // 禁止 inline function 於 JSX 中 (可避免無意義的重新建立 Function & 造成渲染)
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    'react/no-did-update-set-state': 'error', // 避免造成重複渲染
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/react-in-jsx-scope': 'error',

    /* Coding Style 相關 */
    semi: ['error', 'never'], // 結尾分號
    'linebreak-style': 0, // 作業系統 LF & CRLF 差異
    'jsx-quotes': ['warn', 'prefer-single'],
    'array-bracket-spacing': 'warn',
    'no-trailing-spaces': 'warn',
    'eol-last': 'warn',
    quotes: 'warn',
    'comma-dangle': 'warn',
    'operator-linebreak': 'warn',
    'arrow-body-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',

    /* 其他 */
    // 規定檔案需要將 JSX & JS 分開寫
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    /* Custom Rules */
    camelcase: 'off', // 必須採用駝峰式命名
    'no-use-before-define': 'off', // 同檔案被使用的 Function 必須位於 使用者的上方
    // 為了可使用 <Test {...config} > 用來攤平傳入的 Props
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': ['error', { props: false }], // 不可重新賦予值，但可改變其內容
    'import/prefer-default-export': 'off', // 若只有一個 export 於檔案 必須使用 default
    'import/order': 'off',

    /* 開發期間方便用 (建議日後開啟檢查) */
    'no-console': 'off', // 允許 console.log
    'no-alert': 'off', // 允許 alert
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
  },
}
