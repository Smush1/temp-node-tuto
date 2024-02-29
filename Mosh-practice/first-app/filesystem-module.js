const fs = require('fs')

//const files = fs.readdirSync('./')

const files = fs.readdir('5', function(err,result){
    if(err){ console.log('Error: ', err )}
    else{console.log("Result: ", result)}
})


