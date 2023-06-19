// args.js - implement function that parses command line arguments
// (given in format --propName value --prop2Name value2, you don't need to validate it)
// and prints them to the console in the format propName is value, prop2Name is value2
const parseArgs = () => {
    const re = /^--.+/;
    const res = [];
    const args = process.argv;
    for (let i = 0; i < args.length; i++) {
        if (i + 1 < args.length && re.test(args[i]) && !re.test(args[i + 1])) {
            const name = args[i].substring(2);
            const val = args[i + 1];
            res.push(name + ' is ' + val);
        }
    }
    console.log(res.join(', '));
};

parseArgs();
