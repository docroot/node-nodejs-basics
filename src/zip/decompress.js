// implement function that decompresses archive.gz back to the fileToCompress.txt
// with same content as before compression using zlib and Streams API

import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const archName = path.join(__dirname, 'files/archive.gz');
    const fileName = path.join(__dirname, 'files/fileToCompress.txt');

    const inputStream = fs.createReadStream(archName);
    const gzipStream = zlib.createGunzip();
    const outputStream = fs.createWriteStream(fileName);

    inputStream.pipe(gzipStream).pipe(outputStream);
};

await decompress();
