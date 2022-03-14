const mongoose = require('mongoose');
require('dotenv').config();


// Conexión a Base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@db-siipi.f9kcy.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e));