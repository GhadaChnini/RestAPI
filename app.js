const express = require("express")
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(bodyParser.json());
//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//connect to DB

mongoose.connect(process.env.MONGO_URI, (err) => {
  if (err) {
    console.log("Erreur lors de la connexion à la base de données");
    process.exit(-1);
  } else {
    console.log("Connexion avec la base de données établie");
    app.listen(3000);
    console.log("Attente des requêtes au port 3OOO");
  }
});

