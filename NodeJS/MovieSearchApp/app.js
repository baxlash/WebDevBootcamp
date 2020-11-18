const request = require('request')
const express = require('express')
const app = express()
const port = 3000

const apiKey = '5402692a'
const url = "http://www.omdbapi.com/?apikey=" + apiKey + "&"

app.get('/', (req, res) => {
     res.send('Hello World!')
})


app.get('/result', (req, res) => {
     request(url + "s=california", (err, resp, body) => {
          if (!err && resp.statusCode == 200) {
               res.send(body)
          } else {
               res.send("Error:" + err + "\n Response:" + resp)
          }
     })
})


app.listen(port, () => console.log(`Example app listening on port port!`))