import {ElementHandle} from 'playwright';

export const getValues = async (table: ElementHandle) => {
  const values = await table.$$('tr');

  const vals = [];

  for (const val of values.slice(1)) {
    const els = await val.$$('td');

    const vls = [];

    for (const el of els.slice(1)) {
      const text = await el.textContent();

      vls.push(text.trim());
    }

    vals.push(vls);
  }

  return vals;
};
