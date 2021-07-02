export const buildTableData = (headers: string[], values: string[]) => {
  const catalog = [];

  values.forEach(page => {
    const obj = {};

    headers.forEach((header, idx) => {
      obj[header] = page[idx];
    });

    catalog.push(obj);
  });

  return catalog;
};