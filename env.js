import fs from 'fs';

(async () => {

    const valueObj = {};
    const valueFromENV = fs.readFileSync('.env', 'utf8'); // read file

    valueFromENV.split('\n').map((line) => {

        const [key, value] = line.split('=');

        valueObj[key.trim()] = value.trim();
    });

    const bufferStringFormate = JSON.stringify(valueObj, null, 2);

    // write file
    fs.writeFileSync('.awsEnv.json', bufferStringFormate);
    
})();