import {suite, test} from 'node:test';
import assert from 'node:assert';

suite('canary test', () => {
  test('that mocha is wired together correctly', () => {
    assert.equal(true, true);
  });
});
