module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['./setupTests.js'],

  moduleNameMapper: {
    '^styled-components$': '<rootDir>/node_modules/styled-components',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|axios|react-native-modal)/)',
  ],
};
