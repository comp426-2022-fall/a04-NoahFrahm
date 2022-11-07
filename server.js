import roll from './lib/roll';

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
    const sides = 6;
    const dice = 2;
    const rolls = 1;

    if (req.body.sides) {
        sides = req.body.sides
    }
    if (req.body.dice) {
        dice = req.body.dice
    }
    if (req.body.rolls) {
        rolls = req.body.rolls
    }

    res.status(200).json(roll(sides, dice, rolls));
})


app.post('/app/roll/:sides/', (req, res, next) => {
    const sides = 6;

    if (req.params.sides) {
        sides = req.params.sides
    }

    res.json(roll(sides, 2, 1));
})


app.post('/app/roll/:sides/:dice/', (req, res, next) => {
    const sides = 6;
    const dice = 2;

    if (req.params.sides) {
        sides = req.params.sides
    }
    if (req.params.dice) {
        dice = req.params.dice
    }

    res.json(roll(sides, dice, 1));
})


app.post('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
    const sides = 6;
    const dice = 2;
    const rolls = 1;

    if (req.params.sides) {
        sides = req.params.sides
    }
    if (req.params.dice) {
        dice = req.params.dice
    }
    if (req.params.rolls) {
        rolls = req.params.rolls
    }

    res.json(roll(sides, dice, rolls));
})


app.listen(port, () => {
    console.log("Server listening on port " + port)
})