const express = require("express")

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json())
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    console.log("this is home page")
    res.status(200).send("Welcome to Purrify")
})
app.post('/login', (req, res) => {
    const data = req.body
    console.log("its a post request with data : " + data)
    res.status(200).json(data)
})