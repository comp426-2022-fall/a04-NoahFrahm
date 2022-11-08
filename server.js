import roll from "./lib/roll.js"
import express from 'express';
import minimist from "minimist";


// const express = require('express')
const app = express()

// parse command line args
const args = minimist(process.argv.slice(2))
const port = args.port ? args.port: 5000
// console.log('por');
console.log('port is: ' + port);



// app.get('/', (req, res, next) => {
//     res.send('Hello, world!')
// })
app.get('*', (req, res, next) => {
    res.status(404).send('404 NOT FOUND')
})


app.post('/app/', (req, res, next) => {
    console.log('rooty tooty');
    res.status(200).send('200 OK')
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
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(json(roll(sides, dice, rolls)));
})


app.post('/app/roll/:sides/', (req, res, next) => {
    const sides = 6;

    if (req.params.sides) {
        sides = req.params.sides
    }
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(json(roll(sides, 2, 1)));
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

    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(json(roll(sides, dice, 1)));
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

    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(json(roll(sides, dice, rolls)));
})


app.listen(port, () => {
    console.log("Server listening on port " + port)
})