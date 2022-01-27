const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

let movies = []

app.get('/movies', (req, res) => {
    res.status(200).json(movies)
})

// app.get('/opinion', (req, res) => {
//     res.status(200).json(opinion)
// })

app.get('/movies/:movieId', (req, res) => {
    res.json(movies[req.params.movieId-1])
})

// app.get('/articles', (req, res) => {
//     res.status(200).json(articlesData)
// })

// app.get('/articles/:id', (req, res) => {
//     res.json(articlesData[req.params.id-1])
// })

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})