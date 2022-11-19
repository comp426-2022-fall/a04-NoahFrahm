#!/use/bin/env node

import roll from "./lib/roll.js"
import express from 'express';
import minimist from "minimist";


// const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}));

// parse command line args
const args = minimist(process.argv.slice(2))
const port = args.port || 5000;
// console.log('por');
// console.log('port is: ' + port);


app.get('/app/', (req, res) => {
    // console.log('rooty tooty');
    res.status(200).send("200 OK");
})


app.post('/app/roll/', (req, res, next) => {
    const sides = 6;
    const dice = 2;
    const rolls = 1;

    if (req.body.sides) {
        sides = parseInt(req.body.sides);
    }
    if (req.body.dice) {
        dice = parseInt(req.body.dice);
    }
    if (req.body.rolls) {
        rolls = parseInt(req.body.rolls);
    }
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(roll(sides, dice, rolls));
})


app.get('/app/roll/:sides/', (req, res, next) => {
    const sides = 6;

    if (req.params.sides) {
        sides = parseInt(req.params.sides);
    }
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(roll(sides, 2, 1));
})


app.get('/app/roll/:sides/:dice/', (req, res, next) => {
    const sides = 6;
    const dice = 2;

    if (req.params.sides) {
        sides = parseInt(req.params.sides);
    }
    if (req.params.dice) {
        dice = parseInt(req.params.dice);
    }

    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(roll(sides, dice, 1));
})


app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
    const sides = 6;
    const dice = 2;
    const rolls = 1;

    if (req.params.sides) {
        sides = parseInt(req.params.sides);
    }
    if (req.params.dice) {
        dice = parseInt(req.params.dice);
    }
    if (req.params.rolls) {
        rolls = parseInt(req.params.rolls);
    }

    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(roll(sides, dice, rolls));
})

app.get('*', (req, res) => {
    // console.log('rooty tooty');
    res.status(404).send("404 NOT FOUND");
})
// app.listen(port, () => {
//     console.log("Server listening on port " + port)
// })

app.listen(port);