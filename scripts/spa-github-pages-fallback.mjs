import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const index = join('dist', 'index.html');
const fallback = join('dist', '404.html');

if (existsSync(index)) {
  copyFileSync(index, fallback);
}
