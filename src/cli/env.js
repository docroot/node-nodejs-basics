// env.js - implement function that parses environment variables with prefix RSS_
// and prints them to the console in the format "RSS_name1=value1; RSS_name2=value2"

const parseEnv = () => {
    const re = /^RSS_/;
    const rssvars = [];
    Object.keys(process.env).forEach((key) => {
        if (re.test(key)) {
            rssvars.push(`${key}=${process.env[key]}`);
        }
    });
    console.log(rssvars.join('; '));
};

parseEnv();
