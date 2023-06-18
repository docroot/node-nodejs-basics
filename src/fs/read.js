// read.js - implement function that prints content of the fileToRead.txt into console
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const filesDir = path.join(__dirname, 'files');
    const readFile = path.join(filesDir, 'fileToRead.txt');

    fs.stat(readFile, (err, stats) => {
        if (err && err.code === 'ENOENT') {
            throw new Error("FS operation failed");
        }
    });

    fs.readFile(readFile, 'utf8', (err, data) => {
        if (err) {
            throw new Error("FS operation failed");
        }
        console.log(data);
    });
};

await read();
