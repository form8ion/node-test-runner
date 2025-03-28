import {promises as fs} from 'node:fs';
import assert from 'node:assert';

import {Then} from '@cucumber/cucumber';

Then('a canary test file is created', async function () {
  assert.equal(
    await fs.readFile(`${this.projectRoot}/src/canary-test.js`, 'utf-8'),
    `import {suite, test} from 'node:test';
import assert from 'node:assert';

suite('canary test', () => {
  test('that the node test runner is wired together correctly', () => {
    assert.equal(true, true);
  });
});
`
  );
});
