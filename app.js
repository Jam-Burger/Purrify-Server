const express = require("express")
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    console.log("this is home page")
    res.status(200).send("Welcome to Purrify")
})
app.post('/login', (req, res) => {
    const data = req.body
    console.log("its a post request with data : " + data)
    res.status(200).json(data)
})

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})