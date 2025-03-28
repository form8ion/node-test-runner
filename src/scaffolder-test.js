import {dirname, resolve} from 'node:path';
import {suite, test, mock, before} from 'node:test';
import assert from 'node:assert';
import {fileURLToPath} from 'node:url';
import any from '@travi/any';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle

suite('scaffolder', () => {
  let copyFileMock, mkdirMock, scaffold;

  before(async () => {
    copyFileMock = mock.fn();
    mkdirMock = mock.fn();

    mock.module('node:fs/promises', {
      namedExports: {
        copyFile: copyFileMock,
        mkdir: mkdirMock
      }
    });

    ({default: scaffold} = await import('./scaffolder.js'));
  });

  test('that the node test runner is configured', async () => {
    const projectRoot = any.string();

    assert.deepEqual(
      await scaffold({projectRoot}),
      {scripts: {'test:unit:base': 'DEBUG=any node --test --experimental-test-module-mocks "src/**/*-test.js"'}}
    );

    assert.deepEqual(mkdirMock.mock.calls[0].arguments, [`${projectRoot}/src`, {recursive: true}]);
    assert.deepEqual(
      copyFileMock.mock.calls[0].arguments,
      [resolve(__dirname, '..', 'templates', 'test-canary.js'), `${projectRoot}/src/canary-test.js`]
    );
  });
});
