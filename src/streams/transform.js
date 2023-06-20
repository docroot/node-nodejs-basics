// implement function that reads data from process.stdin, reverses text
// using Transform Stream and then writes it into process.stdout
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Transform } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
class ReverseStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformedChunk = chunk.toString().split('').reverse().join('');
        this.push(transformedChunk);
        callback();
    }
}

const transform = async () => {
    const reverseStream = new ReverseStream();
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
