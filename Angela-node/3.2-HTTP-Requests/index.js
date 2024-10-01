import express from "express";
const app = express();

const port = 3500;

app.get('/',(req, res)=>{
    res.status(200).send("THis is homepage ")
})

app.post('/', (req, res)=>{
    res.status(201).send('Data is Created')
})
app.put('/', (req, res)=>{
    res.status(200).send('Data is replaced')
})
app.patch('/', (req, res)=>{
    res.status(200).send('Part of data is updated')
})

app.delete('/', (req, res)=>{
    res.status(200).send('Part of data is delete')
})



app.get('/about', (req,res)=> {
    res.send('<h1> About Page </h1>')
})

app.get('/contact', (req,res)=> {
    res.send('<h1> contact Page </h1>')
})

app.listen(port, ()=> { console.log(`Listening to the ${port}`)} )