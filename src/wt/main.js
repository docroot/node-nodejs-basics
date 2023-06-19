// implement function that creates number of worker threads (equal to the number
// of host machine logical CPU cores) from file worker.js

import os from 'os';
import path, { resolve } from 'path';
import { Worker } from 'worker_threads';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const workerFile = path.join(__dirname, 'worker.js');
    const cpus = os.cpus().length;
    const results = [];
    const promises = [];
    const wid2idx = {};
    for (let i = 0; i < cpus; i++) {
        const promise = new Promise((resolve, reject) => {
            const worker = new Worker(workerFile);
            wid2idx[worker.threadId] = i;
            worker.postMessage(10 + i);
            worker.on('message', (data) => {
                results[wid2idx[worker.threadId]] = { 'status': 'resolved', 'data': data };
                resolve();
            });
            worker.on('error', (eror) => {
                results[wid2idx[worker.threadId]] = { 'status': 'resolved', 'data': data };
                reject();
            });
        });
        promises.push(promise);
    }

    Promise.all(promises)
        .then(() => {
            console.log(results);
        })
        .catch(() => {
            console.log(results);
        });
};

await performCalculations();
