// implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API

import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const fileName = path.join(__dirname, 'files/fileToCompress.txt');
    const archName = path.join(__dirname, 'files/archive.gz');

    const inputStream = fs.createReadStream(fileName);
    const gzipStream = zlib.createGzip();
    const outputStream = fs.createWriteStream(archName);

    inputStream.pipe(gzipStream).pipe(outputStream);
};

await compress();
