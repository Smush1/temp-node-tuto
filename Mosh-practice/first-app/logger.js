var url = 'https://google.com';
console.log(__filename)
console.log(__dirname)
function log(message){
    console.log(message)
}

const moduleWrapperFunction = "function (exports, require, module, __filename, __dirname)"

module.exports = log



