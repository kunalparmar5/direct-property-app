module.exports = {
  preset: 'ts-jest', // Use ts-jest preset
  testEnvironment: 'jsdom', // Set the test environment to jsdom
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
