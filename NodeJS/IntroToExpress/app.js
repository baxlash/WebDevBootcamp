const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/bye', (req, res) => res.send('Goodbye!'))
app.get('/dog', (req, res) => res.send('MEOW!'))
app.get('*', (req, res) => res.send('You are a star!'))


app.listen(port, () => console.log(`Example app listening on port port!`))