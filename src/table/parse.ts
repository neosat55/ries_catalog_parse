import {Page} from 'playwright';
import {getHeaders} from './headers';
import {getValues} from './values';
import {buildTableData} from './buildTableData';
import {save, log} from '../utils';

export const parsePage = async (page: Page) => {
  const table = await page.$('.catalog');

  const [
    headers,
    values
  ] = await Promise.all([
    getHeaders(table),
    getValues(table)
  ]);

  return buildTableData(headers, values);
};

export const parse = async (page: Page) => {
  const {PARSE_URL, FROM_PAGE, TO_PAGE} = process.env;
  const link = new URL(PARSE_URL);
  const listName = link.pathname.split('/').filter(Boolean).pop();
  const pages: Object[] = [];

  for (let i = Number(FROM_PAGE); i < Number(TO_PAGE) + 1; i += 1) {
    link.searchParams.set('p', String(i));

    const paged = link.toString();

    await page.goto(paged);

    const catalogData = await parsePage(page);

    pages.push(catalogData);

    log(paged);

    await page.waitForTimeout(400);
  }

  save(`${listName}.json`, pages);
};