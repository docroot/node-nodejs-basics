// list.js - implement function that prints all array of filenames from
// files folder into console (if files folder doesn't exists Error with
// message FS operation failed must be thrown)
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const filesDir = path.join(__dirname, 'files');
    fs.stat(filesDir, (err, stats) => {
        if (err && err.code === 'ENOENT') {
            throw new Error("FS operation failed");
        }
        fs.readdir(filesDir, (err, files) => {
            if (err) {
                throw new Error("FS operation failed");
            }
            console.log(files);
        });
    });
};

await list();