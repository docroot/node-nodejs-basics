// implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt
// and logs it into console as hex
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const fileName = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

    const fileStream = fs.createReadStream(fileName);

    fileStream.on('data', (data) => {
        hash.update(data);
    });

    fileStream.on('end', () => {
        console.log(hash.digest('hex'));
    });

};

await calculateHash();
