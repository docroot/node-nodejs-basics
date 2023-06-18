// delete.js - implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const filesDir = path.join(__dirname, 'files');

    const removedFile = path.join(filesDir, 'fileToRemove.txt');
    fs.access(removedFile, fs.constants.F_OK, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        }
    });

    fs.unlink(removedFile, (err) => {
        if (err) {
            throw err;
        }
    });

};

await remove();
