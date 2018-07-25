const fs = require('fs');

let path = '/home/jinelei/Github/nodejs/test';

console.log('start')

fs.open(path,'r', (err, fd) => {
    console.log('open')
    if(err) throw err;
    fs.close(fd, (err)=>{
        if(err) throw err;
        console.log('close')
    });
});
console.log('end')
