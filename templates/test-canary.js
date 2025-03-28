import {suite, test} from 'node:test';
import assert from 'node:assert';

suite('canary test', () => {
  test('that the node test runner is wired together correctly', () => {
    assert.equal(true, true);
  });
});
