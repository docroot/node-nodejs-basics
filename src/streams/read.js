// implement function that reads file fileToRead.txt content using
// Readable Stream and prints it's content into process.stdout
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const fileName = path.join(__dirname, 'files/fileToRead.txt');

    const inputStream = fs.createReadStream(fileName);

    inputStream.pipe(process.stdout);
};

await read();
