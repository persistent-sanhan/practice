let fs = require('fs');

fs.createReadStream('./package.json', 'utf-8')
    .on('data', (chunk) => {
        console.log(chunk);
        console.log('chunked');
    })
    .on('end', () => {
        console.log('finished');
    });