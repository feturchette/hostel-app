module.exports = {
  globals: {
    window: {}
  },
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    "<rootDir>/src/config/",
    "<rootDir>/android/"
  ],
}
