const { writeFile, readFile }= require('fs');

const data = "Hello this is the test data"

/* writeFile('./test-text.txt', data , (err) => {
    if (err) throw err;
    console.log('The file has been saved!');}
) */

readFile('test-text.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
  