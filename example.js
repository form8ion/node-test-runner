// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold} from './lib/index.js';

// remark-usage-ignore-next 4
stubbedFs({
  node_modules: stubbedFs.load('node_modules'),
  templates: stubbedFs.load('templates')
});

// #### Execute

(async () => {
  await scaffold({projectRoot: process.cwd()});
})();
