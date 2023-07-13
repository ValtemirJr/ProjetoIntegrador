module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'linebreak-style': 'off',
  },
};

/*
  Arquivo de configuração do ESLint para o servidor.
  O ESLint é uma ferramenta de análise de código estática
  para identificar padrões problemáticos encontrados
  no código JavaScript.
*/
