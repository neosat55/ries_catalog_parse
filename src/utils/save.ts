import {createWriteStream, mkdirSync, existsSync} from 'fs';
import {join} from 'path';

const createDataFolder = () => {
  mkdirSync('data');
};

const hasDataFolder = () => existsSync('data');

export const save = (name: string, tableData: Object[]) => {
  if(!hasDataFolder()) {
    createDataFolder();
  }

  const ws = createWriteStream(join('data', name));

  ws.write(JSON.stringify(tableData));
};