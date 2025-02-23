import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  setup() {},
  async preVisit(page, context) {},
  async postVisit(page, context) {},
};

export default config;
