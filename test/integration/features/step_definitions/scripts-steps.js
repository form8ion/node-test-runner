import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the unit test script is defined', async function () {
  assert.equal(
    this.results.scripts['test:unit:base'],
    'DEBUG=any node --test --experimental-test-module-mocks "src/**/*-test.js"'
  );
});
