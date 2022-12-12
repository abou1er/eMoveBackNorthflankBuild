const express = require('express');
const app = express();
const port = 80;

// app.get('/', (req, res) => {
// 	res.send('Hello World! dans le trankil');
// });

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



	// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');  //r.sH('....', '*' étoile permet la connexion de tous les serveurs)
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');  //<----Bonne pratique

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//---------------------------------------------------------------------------------------------- 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// --------------METHODES Vehicules------------------------------------------

//*****************GET All**********************************
app.get('/', async (req, res) => {
    const vehicules = await Vehicules.find()              // On récupère tous les véhicules
    await res.json(vehicules)
})
