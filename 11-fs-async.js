const { readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt','utf8', (err,result) => {
    if (err) {
        console.log(`Error is : ${err}`)
        return
    }
        const first = result;
        console.log(`First result is : ${result}`) 
    
    readFile('./content/second.txt','utf8', (err, result)=>{
            if(err){
                console.log(`Error is ${err}`)
            }
            const second = result;
            console.log(`Second result is : ${result}`);

            writeFile('./content/result-async.txt', `Here is the async result :${first}, ${second} `,
            (err, result)=>{
                if(err){
                    console.log(`Error is ${err}`)
                    return;
                }
                console.log('done with this task')
            })
    })
})

console.log('Starting the next task')