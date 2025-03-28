import {copyFile, mkdir} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle

export default async function scaffold({projectRoot}) {
  await mkdir(`${projectRoot}/src`, {recursive: true});
  await copyFile(resolve(__dirname, '..', 'templates', 'test-canary.js'), `${projectRoot}/src/canary-test.js`);

  return {scripts: {'test:unit:base': 'DEBUG=any node --test --experimental-test-module-mocks "src/**/*-test.js"'}};
}
