const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"]

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.render("home"))

app.get("/friends", (req, res) => {
     res.render("friends", {
          friends: friends
     })
})

app.post("/addfriend", (req, res) => {
     var newFriend = req.body.newfriend
     friends.push(newFriend)
     res.redirect("/friends")
})

app.listen(port, () => console.log(`Example app listening on port port!`))