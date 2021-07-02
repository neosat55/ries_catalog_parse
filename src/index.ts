import {config} from 'dotenv';

config();

import {chromium} from 'playwright';
import {auth} from './auth';
import {parse} from './table/parse';

(async (fn: Function) => {
  const browser = await chromium.launch({headless: false, slowMo: 300});
  const page = await browser.newPage();

  try {
    await auth(page);
    await fn(page);
  } finally {
    await browser.close();
  }
})(parse);