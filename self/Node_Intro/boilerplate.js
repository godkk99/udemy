const fs = require('node:fs');
console.log(fs)


// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("In the callback")
//     if (err) throw err;
// });
fs.mkdirSync('Cats')

console.log("I come after mkdir in the file")