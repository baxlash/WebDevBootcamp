const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello there, welcome to my assigment!'))

app.get('/speak/:animal', (req, res) => {
  switch (req.params.animal) {
     case 'pig':
          res.send("The pig says 'Oink'")
          break
     case 'cow':
          res.send("The cow says 'Mooo'")
          break
     case 'dog':
          res.send("The dog says 'Woof'")
          break
  
     default:
          break;
  }
})

app.get('/repeat/:word/:times', (req, res) => {
     var result = ""
     for (let i = 0; i < req.params.times; i++) {
          result += req.params.word + " "      
     }
     res.send(result)
})

app.get('*', (req, res) => {
  res.send('Sorry, page not found... What are doing with your life?')
})

app.listen(port, () => console.log(`Example app listening on port port!`))