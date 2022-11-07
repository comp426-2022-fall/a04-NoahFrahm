const express = require('express')
const app = express()

const port = 5000

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
    res.send('Hello, world!')
})

app.post('/app/', (req, res, next) => {
    res.status(200)
})

app.post('/app/roll/', (req, res, next) => {


    if (req.body.sides) {
        
    }
    if (req.body.dice) {

    }
    if (req.body.rolls) {

    }
})


app.listen(port, () => {
    console.log("Server listening on port " + port)
})