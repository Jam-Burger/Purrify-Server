const express = require("express")
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = 'https://purrify.onrender.com/callback'

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send("Welcome to Purrify")
})

app.get('/callback', (req, res) => {
    const code= req.headers.location
    console.log(req.headers)
    if (code) {
        res.send(code)
    }
    else
        res.status(404).send('Code not found')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})