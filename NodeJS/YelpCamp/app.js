const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

var campgrounds = [
     { name: "Salmon Creek", image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e507441742c7fd29f4dc7_340.jpg" },
     { name: "Granite Hill", image: "https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2e78d09145c55a_340.jpg" },
     { name: "Mountain Goats's Rest", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2e78d09145c55a_340.jpg" }
]

app.get('/', (req, res) => res.render("landing"))

app.get('/campgrounds', (req, res) => {
     res.render('campgrounds', { campgrounds: campgrounds })
})

app.post('/campgrounds', (req, res) => {
     let name = req.body.name
     let image = req.body.image
     let newCampground = { name: name, image: image }

     campgrounds.push(newCampground)

     res.redirect('/campgrounds')
})

app.get('/campgrounds/new', (req, res) => {
     res.render('new.ejs')
})

app.listen(port, () => console.log(`The Yelpcamp has started and is listening on port ` + port + `!`))