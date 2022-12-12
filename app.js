const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
	res.send('Hello World! dans le trankil');
});

app.get('/api/:id', (req, res) => {
	res.send(`Get resource for ${req.params.id}.`);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});


const mongoose = require('mongoose');

const Vehicules = require('./vehicules');
const Commandes = require('./commandes');

// let port = 80;
// app.listen(port, () => {            // ecoute du serveur sur le port 7878
//     console.log('le serveur fonctionne sur le port 80')
// })

mongoose.connect(
    process.env.DB_URL
    , err => {
        if (err) throw 'erreur est : ', err;
        console.log('connected to MongoDB')
    });
