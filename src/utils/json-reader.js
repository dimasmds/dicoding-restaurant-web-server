import fs from 'fs';

export const readJson = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
      reject(error);
    }
    resolve(JSON.parse(data));
  });
});

export const saveVersionToJson = (path, version) => new Promise((resolve, reject) => {
  fs.writeFile(path, JSON.stringify({ version }), (error) => {
    if (error) {
      reject(error);
    }
    resolve();
  });
});
