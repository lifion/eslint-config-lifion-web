'use strict';

const index = require('.');

describe('lib/index', () => {
  test('the module exports the expected', () => {
    expect(index).toStrictEqual({
      env: expect.any(Object),
      extends: expect.any(Array),
      ignorePatterns: expect.any(Array),
      overrides: expect.any(Array),
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        sourceType: 'script'
      },
      plugins: expect.any(Array),
      rules: expect.any(Object),
      settings: expect.any(Object)
    });
  });
});
