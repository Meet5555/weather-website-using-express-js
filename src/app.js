const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const PORT = process.env.PORT || 8000

app.set('view engine', 'hbs')

const staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath))

const templatePath = path.join(__dirname, '../templates/views')
app.set('views', templatePath)

const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/weather', (req, res) => {
    res.render("weather")
})

app.get('*', (req, res) => {
    res.render("error", {
        errorMessage: "Opps! Page Not Found",
    })
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})