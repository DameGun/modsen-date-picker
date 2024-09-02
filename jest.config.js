/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',

  testEnvironment: 'jsdom',

  rootDir: './src',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  setupFilesAfterEnv: ['<rootDir>/__tests__/setupTests.ts'],

  testMatch: ['**/__tests__/(utils|decorators)/*.(ts|tsx|js|jsx)'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub',
  },

  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
