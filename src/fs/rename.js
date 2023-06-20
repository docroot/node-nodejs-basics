// rename.js - implement function that renames file wrongFilename.txt to properFilename
// with extension .md (if there's no file wrongFilename.txt or properFilename.md already
// exists Error with message "FS operation failed" must be thrown)

import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const filesDir = path.join(__dirname, 'files');
    const wrongFile = path.join(filesDir, 'wrongFilename.txt');
    const properFile = path.join(filesDir, 'properFilename.md');
    fs.access(wrongFile, fs.constants.F_OK, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        }
        fs.access(properFile, fs.constants.F_OK, (err) => {
            if (err === null) {
                throw new Error("FS operation failed");
            }
            fs.rename(wrongFile, properFile, (err) => {
                if (err) {
                    throw new Error("FS operation failed");
                }
            });
        });
    });
};

await rename();
