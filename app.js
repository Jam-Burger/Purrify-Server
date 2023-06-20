const express = require("express")
const { Server } = require("ws")

const PORT = process.env.PORT || 3000;
const server = express()
    .use(express.json())
    .listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`)
    })

// const wss = new Server({ server })

// wss.on('connection', (ws, req) => {
//     ws.on('message', message => {
//         var data = message.toString();
//         console.log(data)
//         if (data === 'hello') {
//             console.log('heya!!!')
//         } else {
//             ws.send("Are you not saying hi to me 🥺👉👈");
//         }
//     })
// })

// server.get('/', (req, res) => {
//     console.log("this is home page")
//     res.status(200).send("Welcome to Purrify")
// })
// server.post('/login', (req, res) => {
//     const data = req.body
//     console.log("its a post request with data : " + data)
//     res.status(200).json(data)
// })