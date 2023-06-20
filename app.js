const express = require("express")
const bodyParser = require('body-parser');
const axios = require('axios');

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = require('./config')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).send("Welcome to Purrify")
})

app.get('/callback', (req, res) => {
    res.status(200).send("Login Page");
})

app.post('/token-request', async (req, res) => {
    const { code } = req.body
    console.log("token request with code : " + code)
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'authorization_code',
                code,
                redirect_uri: REDIRECT_URI,
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
            },
        })
        const { access_token } = response.data;
        res.send(access_token);
    } catch (error) {
        console.error('Failed to obtain access token:', error);
        res.status(500).send('Failed to obtain access token.')
    }
})

app.get('/api', (req, res) => {
    console.log("Api request");
    res.status(200).send("Purrify API")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})