import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  clearMocks: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.[tj]s?(x)'],

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  preset: 'ts-jest',

  restoreMocks: true,
  testEnvironment: 'jsdom',

  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
};

export default config;
