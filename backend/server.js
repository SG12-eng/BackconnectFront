// const express = require('express');

import express from 'express';

const app = express();

// app.get("/", (req, res) => {
//     res.send('Server is ready')
// });


app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: "This is a Joke"
        },
        {
            id: 2,
            title: 'second Joke',
            content: "This is second Joke"
        },
        {
            id: 3,
            title: 'third Joke',
            content: "This is third Joke"
        },
        {
            id: 4,
            title: 'fourth Joke',
            content: "This is fourth Joke"
        },
        {
            id: 5,
            title: 'fifth Joke',
            content: "This is fifth Joke"
        }
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Serve at http://localhost:${port}`)
})