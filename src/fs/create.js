// implement function that creates new file fresh.txt with content "I am fresh and young"
// inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    const filesDir = path.join(__dirname, 'files');
    const freshFile = path.join(filesDir, 'fresh.txt');

    fs.access(freshFile, fs.constants.F_OK, (err) => {
        if (err === null) {
            throw new Error("FS operation failed");
        }
        const freshContent = 'I am fresh and young';
        fs.writeFile(freshFile, freshContent, (err) => {
            if (err) {
                throw err;
            }
        });
    });

};

await create();
