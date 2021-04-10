module.exports = {
  ...require('babel-config-atomikui'),
  plugins: [
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '@atomikui-core': './node_modules/@atomikui/core/dist/components',
        },
      },
    ],
  ],
};
