// Static build: node build.mjs  ->  writes index.html, about.html, services.html, contact.html
import { writeFileSync } from 'node:fs';
import { layout } from './src/components.mjs';
import { home, about, services, contact } from './src/pages.mjs';

for (const page of [home(), about(), services(), contact()]) {
  writeFileSync(page.file, layout(page));
  console.log('wrote', page.file);
}
