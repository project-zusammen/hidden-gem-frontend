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
};
