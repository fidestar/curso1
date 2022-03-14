//requiriendo modulos
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

//conexion a base de datos
require('./database');

const app = express();

//cors agregado por fide
const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));


//estas lineas con para recibir datos del body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
 //agregado por fide
app.get('/', (req, res) => {
  res.json({
      estado: true,
      mensaje: 'funciona!'
      })
  });

//routes(rutas)
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
//app.use('/api/articles', articlesRoutes);
//app.use('/api/point', pointsRoutes);

// iniciar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})
