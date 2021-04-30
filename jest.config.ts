import path from 'path';
import type { Config } from 'jest';

const config: Config = {
  roots: ['.'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '^~/(.*)$': path.resolve(__dirname, 'src/$1'),
  },
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts'],
  coveragePathIgnorePatterns: ['./src/index.ts'],
};

export default config;
