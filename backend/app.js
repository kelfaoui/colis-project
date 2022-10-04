// Modules
var express = require('express');
var path = require('path');
var bodyParser=require('body-parser');
var app = express();
const cors = require('cors');

const session = require('express-session'); // to use sessions

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// all environments
// conversion de entetes le head des requetes.


//les donnees des requete HTTP en donnes
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());


// IN CASE TO USE NODE JS ONLY
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// module express lit le module json
app.use(express.json());


//ouvre le fichier public pour le lire 
app.use(express.static(path.join(__dirname, 'public')));


// include ROUTES & APIs.
// on recupere la route importer du dosier router et

const api = require('./routes/api');
app.use('/', api);


console.log('http://localhost:3000');
app.listen(3000);