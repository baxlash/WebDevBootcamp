const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get('/', (req, res) => res.render('home'))

app.get('/posts', (req, res) => {
     var posts = [{
               title: "Post 1",
               author: "Suzie"
          },
          {
               title: "My adorable pet bunny",
               author: "Charlie"
          },
          {
               title: "Con you believe this pomsky?",
               author: "Rebecca"
          },
     ]
     res.render("posts", {
          posts: posts
     })
})

app.listen(port, () => console.log(`Example app listening on port port!`))