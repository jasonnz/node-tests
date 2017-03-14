const express = require('express');

var app = express();
var users = [{name: 'Jason', age: 37}, {name: 'Julia', age: 32}, {name: 'Joseph', age: 2}]

app.get('/', (req, res)=> {
    res.status(404).send({
        error: 'Page not found!',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res)=> {
    res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;