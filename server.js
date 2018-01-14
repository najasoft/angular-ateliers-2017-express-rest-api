var express= require("express");
const app=express();
var port=3122;
mongoose=require ('mongoose');

// Enregistrement des modèles
User =require ('./app/models/userModel');
Compteur =require ('./app/models/userModel');

body =require('body-parser');
mongoose.connect('mongodb://localhost/users');
app.use(body.json());
var routes=require('./app/routes/userRoutes');

app.use(function(req, res, next) {
// Pour les entêtes CSP CORS
// Un midleware personalisé, on peut aussi utilisé le midleware prédéfini "cors"
// var cors=require("cors");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","DELETE,GET,POST,PUT" );
    next();
  });
routes.routes(app);


app.listen(port);



