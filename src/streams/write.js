// implement function that writes process.stdin data into file fileToWrite.txt
// content using Writable Stream
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const fileName = path.join(__dirname, 'files/fileToWrite.txt');

    const outputStream = fs.createWriteStream(fileName);

    process.stdin.pipe(outputStream);
};

await write();
