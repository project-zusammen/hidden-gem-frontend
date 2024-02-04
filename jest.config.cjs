// jest.config.cjs
// module.exports = {
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['./src/setupTests.js'],
//     transform: {
//       '^.+\\.(js|jsx)$': 'babel-jest',
//     },
//   };
  
// // jest.config.cjs
// module.exports = {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['./src/setupTests.js'],
//   transform: {
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
//   globals: {
//     'ts-jest': {
//       useESM: true,
//     },
//   },
//   extensionsToTreatAsEsm: ['.jsx'], // Remove '.js' from here
// };

// jest.config.cjs
// module.exports = {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['./src/setupTests.js'],
//   transform: {
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
// };


// module.exports = {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['./src/setupTests.js'],
//   transform: {
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
// };

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.js'],
  roots: [
    "<rootDir>",
  ],
  modulePaths: [
    "<rootDir>",
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/mocks/imageMock.js',
    "\\.(css|less)$": "<rootDir>/mocks/imageMock.js"
  }
};
