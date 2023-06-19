// rewrite it to it's equivalent in ECMAScript notation (and rename it to esm.mjs)

import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { readFile } from 'fs/promises';

import './files/c.js';


const importJson = async (fileName) => {
    const data = await readFile(fileName, { encoding: 'utf8' });
    return JSON.parse(data);
};

const random = Math.random();

let unknownObject;
let fileName;

if (random > 0.5) {
    fileName = path.join(__dirname, '/files/a.json');
} else {
    fileName = path.join(__dirname, '/files/b.json');
}

unknownObject = await importJson(fileName);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

