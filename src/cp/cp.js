// implement function spawnChildProcess that receives array of arguments args and creates child process from file
import { spawn } from 'child_process';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const nodejs = process.argv[0];
    const scriptFile = path.join(__dirname, 'files', 'script.js');
    args.unshift(scriptFile);

    const childProcess = spawn(nodejs, args);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--opt1', 'val1', '--opt2', 'val2']);
