const express = require("express")

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json())
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.status(200).send("Welcome to Purrify")
})
app.post('/login', (req, res) => {
    const data = req.body
    console.log("Login Post request with data : " + data)
    if (data === {})
        res.status(200).json({ success: true, data: data })
    else
        res.status(404).json({ success: false, message: "no data provided" })
})
app.post('/token-request', (req, res) => {
    const data = req.body
    console.log("Login Post request with data : " + data)
    if (data === {})
        res.status(200).json({ success: true, data: data })
    else
        res.status(404).json({ success: false, message: "no data provided" })
})
app.get('/api', (req, res) => {
    console.log("Api get request");
    res.status(200).send("Purrify API")
})