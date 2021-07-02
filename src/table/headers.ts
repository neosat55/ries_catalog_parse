import {ElementHandle} from 'playwright';

export const getHeaders = async (table: ElementHandle) => {
  const headers = await table.$$('th');

  const n = [];

  for (let head of headers.slice(1)) {
    const text = await head.textContent();

    n.push(text.trim());
  }

  return n;
};

